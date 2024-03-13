import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

import RestaurantInfo from "./RestaurantInfo";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantMenu from "./RestaurantMenu";
import { useState } from "react";

const Restaurant = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);

  const [isItemCategorySelected, setIsItemCategorySelected] = useState(false);
  const [menuSelected, setMenuSelected] = useState();

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
          <div className="w-full flex flex-col border m-2">
            <div
              className="border bg-gray-50 flex justify-between"
              onClick={() => {
                setMenuSelected(index);
                isItemCategorySelected
                  ? setIsItemCategorySelected(false)
                  : setIsItemCategorySelected(true);
              }}
            >
              <span>{`${item.card.card.title} (${item.card.card.itemCards.length})`}</span>
              <span>⬇️</span>
            </div>
            <div
              className={
                menuSelected === index && isItemCategorySelected
                  ? "block"
                  : "hidden"
              }
            >
              {item.card.card.itemCards.map((item) => (
                <RestaurantMenu info={item.card.info} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Restaurant;
