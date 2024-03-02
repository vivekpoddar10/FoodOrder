import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useRestaurant = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      if (!data.ok) {
        throw new Error("No Data Found");
      }
      const jsonData = await data.json();
      setResInfo([
        jsonData.data.cards[0].card.card.info,
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.offers,
        jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards,
      ]);
    } catch (error) {}
  };

  return resInfo;
};

export default useRestaurant;
