import classNames from "classnames";
const Shimmer = () => {
  return (
    <div className="resturant">
      <div className="food-image">
        <img classNames={"shimmer-item"}></img>
      </div>
      <div classNames={("resturant-name", "shimmer-item")}></div>
      <div classNames={("resturant-address", "shimmer-item")}></div>
      <div classNames={("food-cuisine", " shimmer-item")}></div>
      <div classNames={("price-rating", " shimmer-item")}>
        <div classNames={("price", " shimmer-item")}></div>
        <div classNames={("rating", " shimmer-item")}></div>
      </div>
    </div>
  );
};

export default Shimmer;
