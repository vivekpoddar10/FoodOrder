import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import RestaurantInfo from "./RestaurantInfo";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantMenu from "./RestaurantMenu";
import { MENU_ITEMS } from "../utils/constant";

const Restaurant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [restaurantOffer, setRestaurantOffer] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [meal, setMeal] = useState([]);

  const [vegCarousel, setVegCarousel] = useState([]);
  const [vegMeal, setVegMeal] = useState([]);

  const [vegFilterCheck, setVegFilterCheck] = useState(true);

  const { resId } = useParams();

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(
      MENU_ITEMS + resId
    );
    const jsonData = await data.json();

    setRestaurantInfo(jsonData.data.cards[0].card.card.info);

    setRestaurantOffer(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.offers
    );

    setCarousel(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setMeal(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[5].card.card
        .itemCards
    );

    setVegCarousel(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );

    setVegMeal(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[5].card.card
        .itemCards
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
      <div>
        <div>Veg</div>
        <div>
          <input
            type="checkbox"
            onClick={() => {
              if (vegFilterCheck) {
                setCarousel(
                  vegCarousel.filter(
                    (item) =>
                      item.card.info.itemAttribute.vegClassifier === "VEG"
                  )
                );
                setMeal(
                  vegMeal.filter(
                    (item) =>
                      item.card.info.itemAttribute.vegClassifier === "VEG"
                  )
                );
                setVegFilterCheck(false);
              } else {
                setCarousel(vegCarousel);
                setMeal(vegMeal);
                setVegFilterCheck(true);
              }
            }}
          />
        </div>
      </div>
      <div className="restaurant-carousel">
        <h3>Carousel</h3>
        {carousel.map((item) => (
          <RestaurantMenu info={item.card.info} />
        ))}
      </div>
      <div>
        <h3>Meals</h3>
        {meal.map((item) => (
          <RestaurantMenu info={item.card.info} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Restaurant;
