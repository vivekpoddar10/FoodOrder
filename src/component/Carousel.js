import { IMAGE_URL } from "../utils/constant";
const Carousel = (props) => {
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
      <div>
        <img src={IMAGE_URL + imageId} className="carousel-image"></img>
      </div>
      <div className="carousel-food-details">
        <div>{name}</div>
        <div>{description}</div>
        <div>{itemAttribute.vegClassifier}</div>
      </div>
      
      <div className="price-details">₹{price/100}</div>
      <div>
        {
           offerTags ? console.log(offerTags[0]) : console.log('not access')
        }
      </div>
    </div>
  );
};

export default Carousel;
