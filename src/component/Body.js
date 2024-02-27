import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const restList = useRestaurantList();
  const [filterList, setFilterList] = useState([]);
  const [filterClick, setFilterClick] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFilterList(restList);
  }, [restList]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search restaurant"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(searchValue + e.target.value);
            console.log(searchValue);
          }}
        ></input>
      </div>

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
        >
          Top Rated
        </button>
      </div>

      <div className="flex flex-wrap">
        {filterList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard info={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
