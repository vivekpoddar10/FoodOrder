import { IMAGE_URL } from "../utils/constant";
const RestaurantMenu = (props) => {
  const { info } = props;
  const {
    category,
    description,
    imageId,
    inStock,
    name,
    itemAttribute,
    offerTags,
    price,
  } = info;


  return (
    <div className="flex border m-2 p-2 w-[1200px]">
      <div className="w-1/6">
        <img src={IMAGE_URL + imageId} className="carousel-image"></img>
      </div>
      <div className="flex flex-col w-4/5 border">
        <div className="carousel-food-name">{name}</div>
        <div className="carousel-food-desc">{description}</div>
        <div className="carousel-food-catg">{itemAttribute.vegClassifier}</div>
      </div>

      <div className="flex flex-col border justify-center items-center w-1/6">
        <div className="carousel-price">₹{price / 100}</div>
        <div className="carousel-price-offer">{offerTags ? offerTags[0].title : ''} </div>
        <div className="carousel-price-offer-coupon">{offerTags ? offerTags[0].subTitle : ''} </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
