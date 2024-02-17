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
    <div className="carousel">
      <div className="carousel-image-div">
        <img src={IMAGE_URL + imageId} className="carousel-image"></img>
      </div>
      <div className="carousel-food-details">
        <div className="carousel-food-name">{name}</div>
        <div className="carousel-food-desc">{description}</div>
        <div className="carousel-food-catg">{itemAttribute.vegClassifier}</div>
      </div>

      <div className="carousel-price-details">
        <div className="carousel-price">₹{price / 100}</div>
        <div className="carousel-price-offer">{offerTags ? offerTags[0].title : ''} </div>
        <div className="carousel-price-offer-coupon">{offerTags ? offerTags[0].subTitle : ''} </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
