import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchtext] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //  Json data
    // console.log(json);
    // Optional Chaining to use ?
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //Conditional Rendering -
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}></input>

          <button onClick={() => {}}>Search</button>
          {/* Fillter the Restaurant Cards and update the UI  */}
        </div>
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
