import { useEffect, useState } from "react";
import Resturant from "./Resturant";

const Body = () => {
<<<<<<< Updated upstream:component/Body.jsx
  const [resturantList, setResturantList] = useState([]);
=======
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
>>>>>>> Stashed changes:src/component/Body.js

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

<<<<<<< Updated upstream:component/Body.jsx
  return (
=======
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
>>>>>>> Stashed changes:src/component/Body.js
    <div>
      <div>
        {/**
         * TODO: Add onclick event listener which will filter the restaurants with rating above 4.5
         * we will update the restaurant list with the condition
         */}
        <button
          onClick={() =>
<<<<<<< Updated upstream:component/Body.jsx
            setResturantList(
              resturantList.filter((value) => value.info.avgRating >= 4.5)
=======
            setFilterRestaurantList(
              filterRestaurantList.filter(
                (value) => value.info.avgRating >= 4.5
              )
>>>>>>> Stashed changes:src/component/Body.js
            )
          }
        >
          Top Rated
        </button>
      </div>

<<<<<<< Updated upstream:component/Body.jsx
      <div className="resturant-list">
        {resturantList.map((resturant) => (
          <Resturant info={resturant.info} />
=======
      <div>
        {/**
         * TODO: Add onchange event listener and store the input value
         */}
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        {/**
         * TODO: Add onclick event listener which will filter the restaurant whose name contains the string entered in input field
         */}
        <button
          onClick={() => {
            const filterResult = filterRestaurantList.filter((value) =>
              value.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            if (filterResult.length != 0) {
              setFilterRestaurantList(filterResult);
            } else {
              setFilterRestaurantList(
                restaurantList.filter((value) =>
                  value.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }
          }}
        >
          Search
        </button>
      </div>
      {/**
       * For printing the resturant list
       */}
      <div className="resturant-list">
        {filterRestaurantList.map((resturant) => (
          <Restaurant info={resturant.info} />
>>>>>>> Stashed changes:src/component/Body.js
        ))}
      </div>
    </div>
  );
};

export default Body;
