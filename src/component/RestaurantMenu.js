import { IMAGE_URL } from "../utils/constant";
const RestaurantMenu = (props) => {
  const { info } = props;
  const {
    description,
    imageId,
    name,
    itemAttribute,
    offerTags,
    price = 8500,
  } = info;

  return (
    <div className="flex p-2 w-full justify-between border-b-2 border-gray-300">
      <div className="flex flex-col w-10/12 ">
        <div>{name}</div>
        <div className="flex w-[100px] items-center justify-between">
          <div className="text-lg">₹{price / 100}</div>
          <div className="text-sm text-red-400">
            {offerTags ? offerTags[0].title : ""}{" "}
          </div>
          
        </div>
        <div className="text-sm text-gray-400">{description}</div>
        <div className="text-xs">{itemAttribute?.vegClassifier}</div>
      </div>

      <div className="mr-2 flex flex-col items-end justify-center w-2/12">
        <img src={IMAGE_URL + imageId} className="w-[100px] my-0"></img>
        <label className=" bg-white text-green-500 rounded-md border border-gray-300 hover:border-green-500 cursor-pointer px-6 m-1">
          Add
        </label>
      </div>
    </div>
  );
};

export default RestaurantMenu;
