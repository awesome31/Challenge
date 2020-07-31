import React, { useState, useEffect } from 'react';
import { DUMMY_DATA } from './dummyData';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetail from './components/RecipeDetail';
import Recipe from './components/Recipe';
import { Link, Router } from '@reach/router';
import { connect } from 'react-redux';
import { setRecipes, searchRecipe } from './store/recipeActions';
import { Spinner } from 'react-bootstrap';

const App = (props) => {
  const [loading, setLoading] = useState(false);
  const [recipesLocal, setRecipesLocal] = useState(props.recipes);

  useEffect(() => {
    props.setRecipes(setLoading);
  }, [setLoading]);

  useEffect(() => {
    setRecipesLocal(props.recipes);
  }, [props.recipes]);

  return (
    <div className="container mt-3 mb-3">
      {loading && <Spinner />}
      <SearchBar
        onSearch={(term) => {
          setRecipesLocal(searchRecipe(props.recipes, term));
        }}
      />
      {!loading && (
        <Router>
          <RecipeList path="/" recipes={recipesLocal} />
          <RecipeDetail path="/details/:id" />
        </Router>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});

export default connect(mapStateToProps, { setRecipes })(App);
