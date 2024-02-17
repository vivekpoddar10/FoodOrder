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
    <div className="restaurant-info">
      <div className="restaurant-info-details">
        <div className="restaurant-info-name-address">
          <div className="restaurant-info-name">{name}</div>
          <div className="restaurant-info-address">
            {locality}, {city}
          </div>
        </div>
        <div className="restaurant-info-food-image">
          <img src={IMAGE_URL + cloudinaryImageId}></img>
        </div>
      </div>
      <div>
        <div>{cuisines}</div>
      </div>
    </div>
  );
};
export default RestaurantInfo;
