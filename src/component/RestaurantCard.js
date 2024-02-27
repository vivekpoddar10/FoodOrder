import React from "react";
import { IMAGE_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { info } = props;
  const { name, locality, avgRating, costForTwo, cloudinaryImageId, cuisines } =
    info;
  return (
    <div className="flex-col m-2 p-2 w-[250px] h-[300px] border rounded-lg">
      <div className="flex justify-center ">
        <img
          src={IMAGE_URL + cloudinaryImageId}
          alt="food image"
          className="w-[200px] h-[120px] rounded-xl"
        ></img>
      </div>
      <div className="restaurant-name">{name}</div>
      <div className="restaurant-address">{locality}</div>
      <div className="food-cuisine">
        {cuisines.filter((value, index) => index < 3).join()}...
      </div>
      <div className="price-rating">
        <div className="price">{costForTwo}</div>
        <div className="rating">{avgRating}⭐</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
