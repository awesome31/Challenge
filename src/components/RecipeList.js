import React from 'react';
import './RecipeList.css';
import Recipe from './Recipe';

const RecipeList = (props) => {
  console.log('RL: ', props.recipes);
  return (
    <div className="image-list">
      {props.recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default RecipeList;
