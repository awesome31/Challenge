import axios from 'axios';

const setRecipes = (setLoading) => (dispatch) => {
  console.log('Here');
  setLoading(true);
  axios
    .get('http://starlord.hackerearth.com/recipe')
    .then((res) => {
      console.log(res.data);
      dispatch({ type: 'SET_RECIPES', payload: res.data });
    })
    .catch(console.error)
    .finally(() => setLoading(false));
};

const getRecipeById = (recipes, id) =>
  recipes.find((recipe) => recipe.id === id);

const searchRecipe = (recipes, name) =>
  recipes.filter((recipe) => recipe.name.startsWith(name));

export { setRecipes, getRecipeById, searchRecipe };
