import { useEffect, useState } from "react";
import RestaurantCard, { LabelRestaurantCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const restList = useRestaurantList();
  const [filterList, setFilterList] = useState([]);
  const [filterClick, setFilterClick] = useState(true);

  const RestaurantCardLabeled = LabelRestaurantCard(RestaurantCard);

  useEffect(() => {
    setFilterList(restList);
  }, [restList]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            const topRated = restList.filter(
              (res) => res.info.avgRating >= 4.5
            );
            if (filterClick) {
              setFilterList(topRated);
              setFilterClick(false);
            } else {
              setFilterList(restList);
              setFilterClick(true);
            }
          }}
          className="bg-grey rounded-md"
        >
          Top Rated
        </button>
      </div>

      <div className="flex flex-wrap m-auto">
        {filterList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.totalRatingsString === '5K+' ? (
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
