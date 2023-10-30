import { rest } from 'msw'
import recipeSearchResults from './recipeSearchResults.json'
import recipeResult from './recipeResult.json'
import { vi } from 'vitest'

export const getRecipes = vi.fn((req, res, ctx) => {
  return res(ctx.status(200), ctx.json(recipeSearchResults))
})
export const getRecipe = vi.fn((req, res, ctx) => {
  return res(ctx.status(200), ctx.json(recipeResult))
})

export const handlers = [
  rest.get('https://api.spoonacular.com/recipes/complexSearch', getRecipes),
  rest.get('https://api.spoonacular.com/recipes/:id/information', getRecipe),
]