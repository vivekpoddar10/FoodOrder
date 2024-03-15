import { useState } from "react";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantMenuCategory = (props) => {
  const { item } = props;
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  return (
    <div className="w-full flex flex-col border m-2">
      <div
        className="border bg-gray-50 flex justify-between"
        onClick={() => {
          setIsCategorySelected(!isCategorySelected);
          console.log(isCategorySelected);
        }}
      >
        <div>{`${item.card.card.title} (${item.card.card.itemCards.length})`}</div>
        <div>{isCategorySelected ? '🔼' : '🔽'}</div>
      </div>
      {item.card.card.itemCards.map(
        (item) =>
          isCategorySelected && (
            <RestaurantMenu key={item.card.info.name} info={item.card.info} />
          )
      )}
    </div>
  );
};

export default RestaurantMenuCategory;
