import React from 'react';
import Recipe, { RecipeType } from './Recipe';
import { connect } from 'react-redux';
import { getRecipeById } from '../store/recipeActions';

/**
 * @param {RecipeType} props
 */
const RecipeDetail = (props) => {
  const rp = getRecipeById(props.recipes, +props.id);
  console.log(rp);
  const { description, image, label, name, price } = rp || props;
  return (
    <div className="row container mt-3">
      <div className="col-md-6" style={{ padding: 10 }}>
        <div className="row">
          <img
            src={image}
            alt=""
            style={{ marginBottom: 20, height: 200, width: 200 }}
          />
        </div>
        <div className="row">
          <h3>Ingridients: </h3>
          <p className="text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="row">
          <h3>How to prepare: </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-12">
            <h1>{name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-secondary text-left">Description</p>
          </div>
          <div className="col-md-12">
            <h6 className="text-left">{description}.</h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            {price && <div className="btn btn-primary">{`$ ${price}`}</div>}
          </div>
          <div className="col-md-6">
            {label && (
              <div className="btn btn-info align-self-right">{label}</div>
            )}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div class="form-group">
              <label
                for="exampleFormControlTextarea1"
                className="text-secondary"
              >
                Add comments
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipe.recipes,
});

export default connect(mapStateToProps)(RecipeDetail);
