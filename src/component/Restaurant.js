import { useState, useEffect } from "react";
import RestaurantInfo from "./RestaurantInfo";
const Restaurant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [restaurantOffer, setRestaurantOffer] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=52630&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setRestaurantInfo(jsonData.data.cards[0].card.card.info);
    console.log(jsonData.data);
  };

  return (
    <div>
      <h1>This is restaurant page</h1>
      <RestaurantInfo info={restaurantInfo}/>
    </div>
  );
};

export default Restaurant;
