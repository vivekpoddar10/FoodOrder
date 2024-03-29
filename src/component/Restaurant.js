import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

import RestaurantInfo from "./RestaurantInfo";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantMenu from "./RestaurantMenu";
import { useState } from "react";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const Restaurant = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);

  const [categorySelected, setCategorySelected] = useState(-1);

  if (resInfo.length === 0) {
    return <h1>loading data</h1>;
  }

  const [detail, offers, menu] = resInfo;

  return (
    <div>
      <div className="flex justify-center">
        <RestaurantInfo info={detail} />
      </div>

      <div className="flex justify-center ">
        {offers.map((offer) => (
          <RestaurantOffer info={offer.info} />
        ))}
      </div>

      <div className="w-6/12 m-auto flex flex-col justify-center items-center">
        {menu.map((item, index) => (
          // controlled component
          <RestaurantMenuCategory
            key={item.card.card.title}
            item={item}
            isCategorySelected={index === categorySelected ? true : false}
            showCategoryItems={() => setCategorySelected(index)}
          />
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Restaurant;
