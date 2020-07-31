import { RecipeType } from '../components/Recipe';

/**
 * @type {{recipes: RecipeType[]}}
 */
const INITIAL_STATE = {
  recipes: [],
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      console.log('Payload: ', action.payload);
      return { ...state, recipes: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
