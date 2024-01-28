import { useEffect, useState } from "react";
import Resturant from "./Resturant";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);

  const getResturantList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setResturantList(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(getResturantList, []);

  return (
    <div>
      <div>
        <button
          onClick={() =>
            setResturantList(
              resturantList.filter((value) => value.info.avgRating >= 4.5)
            )
          }
        >
          Top Rated
        </button>
      </div>

      <div className="resturant-list">
        {resturantList.map((resturant) => (
          <Resturant info={resturant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
