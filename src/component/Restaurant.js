import { useState, useEffect } from "react";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantMenu from "./RestaurantMenu";

const Restaurant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [restaurantOffer, setRestaurantOffer] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [meal, setMeal] = useState([]);

  const [vegCarousel, setVegCarousel] = useState([]);
  const [vegMeal, setVegMeal] = useState([]);

  const [vegFilterCheck, setVegFilterCheck] = useState(true);

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

    setCarousel(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .carousel
    );
    setMeal(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[5].card.card
        .itemCards
    );

    setVegCarousel(
      jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .carousel
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
                      item.dish.info.itemAttribute.vegClassifier === "VEG"
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
          <RestaurantMenu info={item.dish.info} />
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
