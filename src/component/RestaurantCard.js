import React from "react";
import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { info } = props;
  const { name, locality, avgRating, costForTwo, cloudinaryImageId, cuisines } =
    info;
  return (
    <div className="restaurant">
      <div className="food-image">
        <img src={IMAGE_URL + cloudinaryImageId} alt="food image"></img>
      </div>
      <div className="restaurant-name">{name}</div>
      <div className="restaurant-address">{locality}</div>
      <div className="food-cuisine">{
      cuisines.filter((value, index) => index < 3).join()
      }...</div>
      <div className="price-rating">
        <div className="price">{costForTwo}</div>
        <div className="rating">{avgRating}⭐</div>
      </div>
    </div>
  );
};

export default RestaurantCard;