const RestaurantOffer = (props) => {
  const { info } = props;
  const { description, header, couponCode } = info;

  return (
    <div className="restaurant-offer">
      <div className="restaurant-offer-details">
        <div className="restaurant-offer-header">{header}</div>
        <div className="restaurant-offer-coupon">{couponCode}</div>
      </div>
      <div className="restaurant-offer-desc">{description}</div>
    </div>
  );
};

export default RestaurantOffer;
