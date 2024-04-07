import React, { useContext } from "react";
import { IMAGE_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { info } = props;
  const { name, locality, avgRating, cloudinaryImageId, cuisines, sla } = info;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="flex-col m-2 p-2 w-[250px] h-[300px] border rounded-lg">
      <div className="flex justify-center ">
        <img
          src={IMAGE_URL + cloudinaryImageId}
          alt="food image"
          className="w-[200px] h-[120px] rounded-xl"
        ></img>
      </div>

      <div className="">{name}</div>
      <div className="">{avgRating}⭐</div>
      <div className="">{locality}</div>
      <div className="">
        {cuisines.filter((value, index) => index < 3).join()}...
      </div>

      <div>{`Up to ${sla.lastMileTravelString} (${sla.slaString})`}</div>
      <div>{loggedInUser}</div>
    </div>
  );
};

export const LabelRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-white m-2 px-2 rounded-lg">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
