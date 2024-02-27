import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

import RestaurantInfo from "./RestaurantInfo";
import RestaurantOffer from "./RestaurantOffer";
import RestaurantMenu from "./RestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);

  if (resInfo.length === 0) {
    return <h1>loading data</h1>;
  }

  const [detail, offers, menu] = resInfo;

  return (
    <div>
      <div className="flex justify-center">
        <RestaurantInfo info={detail} />
      </div>

      <div className="flex justify-center">
        {offers.map((offer) => (
          <RestaurantOffer info={offer.info} />
        ))}
      </div>

      <div className="border flex flex-col justify-center items-center">
        {menu.map((item) => (
          <RestaurantMenu info={item.card.info} />
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Restaurant;
