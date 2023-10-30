import Recipe, { getServerSideProps } from '../../pages/recipe/[id]'
import { screen, render } from '@testing-library/react'
import { createRequest, createResponse } from 'node-mocks-http'
import { getRecipe as getRecipeHandler } from '../util/mocks/handlers'
import mockRecipe from '../util/mocks/recipeResult.json'

describe('Recipe Page', () => {
  describe('getServerSideProps', () => {
    it('should return props.recipeInfo', async () => {
      const req = createRequest({
        method: "GET"
      });
      const res = createResponse();
      const {
        props: {
          recipeInfo
        }
      } = await getServerSideProps({req, res, params: {id: "fakeRecipeId"}})
      expect(getRecipeHandler).toHaveBeenCalledTimes(1)
      expect(recipeInfo).toEqual(mockRecipe)
    })
    it('should return props.recipeInfo=null if recipe not found', async () => {
      getRecipeHandler.mockImplementationOnce((req, res, ctx) => {
        return res(ctx.status(404))
      })
      const req = createRequest({
        method: "GET"
      });
      req.session = { user: { id: 'myid'} }
      const res = createResponse();
      const { props } = await getServerSideProps({req, res, params: {id: "fakeRecipeId"}})
      expect(getRecipeHandler).toHaveBeenCalledTimes(1)
      expect(props).toHaveProperty('recipeInfo', null)
    })
  })

  describe('Component', () => {
    it('should render recipe title as h1', () => {
      const {container} = render(<Recipe recipeInfo={mockRecipe}/>)
      expect(container.querySelector('h1').textContent).toBe(mockRecipe.title)
    })
    it('should render recipe image', () => {
      render(<Recipe recipeInfo={mockRecipe}/>)
      expect(screen.getByAltText(new RegExp(`${mockRecipe.title}`, 'i'))).toBeInTheDocument()
    })
    it('should render recipe summary', () => {
      const {container} = render(<Recipe recipeInfo={mockRecipe}/>)
      expect(container.innerHTML).contains(mockRecipe.summary.slice(0, 100))
    })
    it('should contain "original" property for ingredients', () => {
      const {container} = render(<Recipe recipeInfo={mockRecipe}/>)
      for (const {original: ingredient} of mockRecipe.extendedIngredients) {
        expect(container.innerHTML).contains(ingredient)
      }
    })
    it('should contain recipe "instructions" property', () => {
      const {container} = render(<Recipe recipeInfo={mockRecipe}/>)
      expect(container.innerHTML).contains(mockRecipe.instructions)
    })
    it('should render recipe not found message if recipeInfo is null', () => {
      render(<Recipe recipeInfo={null}/>)
      expect(screen.getByText(/recipe not found/i)).toBeInTheDocument()
    })
  })
})
