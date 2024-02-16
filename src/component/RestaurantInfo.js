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

  return <div className="restaurant-info">
    <div>
        <div>{name}</div>
        <div>
        {locality}, {city}
        </div>
    </div>
    <div className="restaurant-food-image">
        <img src={IMAGE_URL + cloudinaryImageId}></img>
    </div>
    <div>
        <div>{cuisines}</div>
    </div>
</div>;

};
export default RestaurantInfo;
