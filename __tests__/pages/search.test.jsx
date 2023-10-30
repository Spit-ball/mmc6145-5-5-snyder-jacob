import { vi } from 'vitest'
import Search, { getServerSideProps } from '../../pages/search'
import { mockRouter } from '../util/setup'
import { screen, fireEvent, render } from '@testing-library/react'
import { createRequest, createResponse } from 'node-mocks-http'
import { getRecipes as getRecipesHandler } from '../util/mocks/handlers'
import { results as mockSearchResults } from '../util/mocks/recipeSearchResults.json'

describe('Search page', () => {
  describe('getServerSideProps', () => {
    it('should pass search results as props.recipes', async () => {
      const req = createRequest({
        method: "GET",
      });
      const res = createResponse();
      const {props: {recipes}} = await getServerSideProps({ req, res, query: {q: "banana"} })
      expect(recipes).toEqual(mockSearchResults)
      expect(getRecipesHandler).toHaveBeenCalledTimes(1)
    })
    it('should not return props.recipes or make external call with no q query param', async () => {
      const req = createRequest({
        method: "GET",
      });
      const res = createResponse();
      const {props} = await getServerSideProps({ req, res, query: {} })
      expect(props).toEqual({})
      expect(getRecipesHandler).not.toHaveBeenCalled()
    })
  })
  describe('Component', () => {
    it('should render search bar', () => {
      render(<Search />)
      expect(screen.getByLabelText(/Search by keywords:/i)).toBeInTheDocument()
    })
    it('should render recipe names', async () => {
      render(<Search recipes={mockSearchResults}/>)
      for (const recipe of mockSearchResults) {
        expect(screen.getByText(new RegExp(`^${recipe.title}$`, 'i'))).toBeInTheDocument()
      }
    })
    it('should render recipe images with title as alt text', async () => {
      render(<Search recipes={mockSearchResults}/>)
      for (const recipe of mockSearchResults) {
        expect(screen.getByAltText(new RegExp(`^${recipe.title}$`, 'i'))).toBeInTheDocument()
      }
    })
    it('should call router.replace with router.pathname and ?q= recipe query', async () => {
      vi.spyOn(mockRouter, 'pathname', 'get').mockReturnValue('/search')
      render(<Search/>)
      const input = screen.getByLabelText(/Search by keywords:/i)
      fireEvent.change(input, { target: { value: 'banana' } })
      fireEvent.click(screen.getByText(/submit/i))
      expect(mockRouter.replace).toHaveBeenCalledTimes(1)
      expect(mockRouter.replace).toHaveBeenCalledWith('/search?q=banana')
    })
    it('should NOT call router.replace if no recipe query', async () => {
      vi.spyOn(mockRouter, 'pathname', 'get').mockReturnValue('/search')
      render(<Search />)
      const input = screen.getByLabelText(/Search by keywords:/i)
      fireEvent.change(input, { target: { value: '' } })
      fireEvent.click(screen.getByText(/submit/i))
      expect(mockRouter.replace).not.toHaveBeenCalled(1)
    })
  })
})