import { IMAGE_URL } from "../utils/constant";
const RestaurantInfo = (props) => {
  const { info } = props;
  const {
    name,
    avgRating,
    city,
    totalRatings,
    locality,
    labels,
    cloudinaryImageId,
    cuisines,
    feeDetails,
  } = info;

  return (
    <div className="flex justify-between p-5 w-2/4">
      <div className="flex flex-col mx-5">
        <div className="text-xl mb-3">{name}</div>
        <div className="text-sm">
          {locality}, {city}
        </div>
      </div>
      <div className="restaurant-info-food-image mx-5">
        <img src={IMAGE_URL + cloudinaryImageId} className="w-[100px]"></img>
      </div>
    </div>
  );
};
export default RestaurantInfo;
