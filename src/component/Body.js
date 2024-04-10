import {useContext } from "react";
import RestaurantCard, { LabelRestaurantCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

import UserContext from "../utils/UserContext";

const Body = () => {
  const restList = useRestaurantList();
  const { setUserName } = useContext(UserContext);
  const RestaurantCardLabeled = LabelRestaurantCard(RestaurantCard);

  return (
    <div className="flex flex-col">
      <div>
        <label>User name: </label>
        <input
          type="text"
          className="p-2 border"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {restList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.totalRatingsString === "5K+" ? (
              <RestaurantCardLabeled info={restaurant.info} />
            ) : (
              <RestaurantCard info={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
