import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  /**
   * TODO: A async function which will fetch data from api, convert them into json, and store the desired information inside state varaible
   */
  const getResturantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setRestaurantList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilterRestaurantList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //callback function will be called after initail rendering is done
  useEffect(getResturantList, []);

  //
  const searchRestaurantList = () => {
    const filterRest = filterRestaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filterRest.length != 0) {
      setFilterRestaurantList(filterRest);
    } else {
      setFilterRestaurantList(
        restaurantList.filter((restaurant) =>
          restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <div>
        {/**
         * TODO: Add onclick event listener which will filter the restaurants with rating above 4.5
         * we will update the restaurant list with the condition
         */}
        <button
          onClick={() =>
            setFilterRestaurantList(
              filterRestaurantList.filter(
                (value) => value.info.avgRating >= 4.5
              )
            )
          }
        >
          Top Rated
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            searchRestaurantList();
          }}
        ></input>
      </div>

      <div className="resturant-list">
        {filterRestaurantList.map((resturant) => (
          <Restaurant info={resturant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
