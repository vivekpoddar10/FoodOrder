import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  //callback function will be called after initial rendering is done
  useEffect(() => {
    getRestaurantList();
  }, []);
  /**
   * TODO: A async function which will fetch data from api, convert them into json, and store the desired information inside state variable
   */
  const getRestaurantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    /**
     * setRestaurantList takes only parameter, if we want to pass multiple array we have to concatenate them internally
     */
    setRestaurantList([
      ...jsonData.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
      ...jsonData.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants,
    ]);

    setFilterRestaurantList([
      ...jsonData.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
      ...jsonData.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants,
    ]);
  };

  /**
   * TODO: filter the restaurant whose name has the characters entered by the user in input box
   * TODO: update the restaurant list with the filtered restaurant, so that the specific restaurant will be shown
   */
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

      <div className="restaurant-list">
        {filterRestaurantList.map((restaurant) => (
          <Link 
          key={restaurant.info.id}
          to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard info={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
