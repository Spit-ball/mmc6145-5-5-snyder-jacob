// These lines can be un-commented if you hit the daily limit for spoonacular
// But beware they will make your tests fail
// import mockRecipe from '../__tests__/util/mocks/recipeResult.json'
// import mockSearchResults from '../__tests__/util/mocks/recipeSearchResults.json'

export async function getRecipe(id) {
  // return mockRecipe

  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`)
  if (response.status !== 200)
    return null
  const data = await response.json()
  return data
}

export async function searchRecipes(query) {
  // return mockSearchResults.results

  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${process.env.API_KEY}&number=12`)
  if (response.status !== 200)
    return null
  const data = await response.json()
  return data.results
}