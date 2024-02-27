import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API } from "./constant";

const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const jsonData = await data.json();
    setRestaurantList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return restaurantList;

};
export default useRestaurant;
