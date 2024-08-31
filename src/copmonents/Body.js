import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockdata";
import { useState } from "react";
import restList from "../utils/mockdata";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredData);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-containner">
        {listOfRestaurants.map((items) => (
          <RestaurantCard key={items.info.id} resData={items} />
        ))}
      </div>
    </div>
  );
};
export default Body;
