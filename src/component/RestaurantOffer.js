const RestaurantOffer = (props) => {
  const { info } = props;
  const { description, header, couponCode } = info;

  return (
    <div className="flex m-2 w-1/10 justify-between border rounded-lg">
      <div className="flex flex-col justify-center mx-2">
        <div className="">{header}</div>
        <div className="text-sm">{couponCode}</div>
      </div>
      <div className="flex items-center mx-2">
        {description}
      </div>
    </div>
  );
};

export default RestaurantOffer;
