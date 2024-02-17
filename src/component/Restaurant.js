import { useState, useEffect } from "react";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantOffer from "./RestaurantOffer";
import Carousel from "./Carousel";
import MenuCategory from "./MenuCategory";

const Restaurant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [restaurantOffer, setRestaurantOffer] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=52630&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setRestaurantInfo(jsonData.data.cards[0].card.card.info);
    setRestaurantOffer(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.offers
    );
    setRestaurantMenu(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    );

    setCarousel(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .carousel
    );
  };

  return (
    <div>
      <RestaurantInfo info={restaurantInfo} />
      <div className="restaurant-offer-cards">
        {restaurantOffer.map((offer) => (
          <RestaurantOffer info={offer.info} />
        ))}
      </div>
          <div className="restaurant-carousel">
          
      {carousel.map((item) => (
        <Carousel info={item.dish.info} />
      ))}</div>
    </div>
  );
};

export default Restaurant;
