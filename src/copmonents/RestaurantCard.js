import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;
  // console.log(resData[0].info);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="res-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")} </h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
