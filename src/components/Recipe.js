import React, { useRef, useState } from 'react';
import { Link } from '@reach/router';

/**
 * @typedef {object} RecipeType
 * @property {number} id
 * @property {string} name
 * @property {string} image
 * @property {string} category
 * @property {string} label
 * @property {string} price
 * @property {string} description
 */

/**
 * @param {RecipeType} props
 */
const Recipe = (props) => {
  const { category, description, image, label, name, price, id } = props;
  const theme = Math.random() > 0.5 ? 'light' : 'dark';
  const textColorClass = theme === 'light' ? 'text-dark' : 'text-white';
  const bgColorClass = theme === 'light' ? 'bg-white' : 'bg-dark';
  const [spans, setSpans] = useState(0);
  const [height, setHeight] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const divRef = useRef(null);
  const imageRef = useRef(null);
  console.log(overlay);
  const setSpan = () => {
    const height = divRef.current.clientHeight + imageRef.current.clientHeight;
    console.log(divRef.current.clientHeight, imageRef.current.clientHeight);
    const spans = Math.ceil(height / 10);

    setSpans(spans);
    setHeight(height);
  };

  return (
    <div
      style={{ gridRowEnd: `span ${spans}`, marginTop: 20 }}
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      <div className="card">
        <div
          style={{
            position: 'absolute',
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderBottomLeftRadius: 10,
            padding: 10,
          }}
          className="text-white text-center"
        >{`In ${category}`}</div>
        {overlay && (
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height,
                width: 270,
              }}
            >
              <Link to={`/details/${id}`}>
                <button className="btn btn-dark">View More</button>
              </Link>
            </div>
          </div>
        )}
        <img
          className="card-img-top"
          src={image}
          alt="Car cap"
          onLoad={() => setSpan()}
          ref={imageRef}
        />
        <div
          className={`card-body ${textColorClass} ${bgColorClass}`}
          ref={divRef}
          style={{ minHeight: 'auto' }}
        >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="row">
            <div className="col">
              <div className="btn btn-primary">{`$ ${price}`}</div>
            </div>
            {label && (
              <div className="col">
                <div className="btn btn-info align-self-right">{label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
