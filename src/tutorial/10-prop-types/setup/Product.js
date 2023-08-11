import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, price, image }) => {
  return (
    <article className="product">
      <h4>single product</h4>
      <img src={image.url} alt={name}></img>
      <h4>{name}</h4>
      <h4>${price || 100}</h4>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  image: {
    url: defaultImage,
  },
  name: "Bed",
  // price: 100,
};

export default Product;
