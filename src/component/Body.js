import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  

  const getrestaurantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setRestaurantList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(getrestaurantList, []);


  return (restaurantList.length === 0) ? <Shimmer/> : (
    <div>
      <div>
        <button
          onClick={() =>
            setRestaurantList(
              restaurantList.filter((value) => value.info.avgRating >= 4.5)
            )
          }
        >
          Top Rated
        </button>
      </div>

      <div></div>

      <div className="resturant-list">
        {restaurantList.map((resturant) => (
          <Restaurant info={resturant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
