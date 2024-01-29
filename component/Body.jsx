import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);

  const getResturantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setResturantList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilterRestaurantList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(getResturantList, []);

  const showSearchRestaurant = () => {
    const filterResult = filterRestaurantList.filter((value) =>
      value.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filterResult.length != 0) {
      setFilterRestaurantList(filterResult);
    } else {
      setFilterRestaurantList(
        restaurantList.filter((value) =>
          value.info.name.toLowerCase().includes(searchText.toLowerCase())
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
        {/**
         * TODO: Add onchange event listener and store the input value
         * based on the input, restaurant list will be re-rendered
         */}
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            showSearchRestaurant();
          }}
        ></input>
      </div>
      {/**
       * For printing the resturant list
       */}
      <div className="resturant-list">
        {filterRestaurantList.map((resturant) => (
          <Restaurant info={resturant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;

