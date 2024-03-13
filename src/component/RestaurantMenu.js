import { IMAGE_URL } from "../utils/constant";
const RestaurantMenu = (props) => {
  const { info } = props;
  const {
    description,
    imageId,
    name,
    itemAttribute,
    offerTags,
    price = 8500,
  } = info;

  return (
    <div className="flex p-2 w-full border-b">
      <div className="mr-2">
        <img src={IMAGE_URL + imageId} className="w-[100px]"></img>
      </div>
      <div className="flex flex-col w-4/5">
        <div>{name}</div>
        <div>{description}</div>
        <div>{itemAttribute?.vegClassifier}</div>
      </div>

      <div className="flex flex-col justify-center items-center w-1/6">
        <div className="carousel-price">₹{price / 100}</div>
        <div className="carousel-price-offer">
          {offerTags ? offerTags[0].title : ""}{" "}
        </div>
        <div className="carousel-price-offer-coupon">
          {offerTags ? offerTags[0].subTitle : ""}{" "}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
