import CardRes from "../components/Restrocard";
import { restaurantLists } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  // first hook use state
  // it is like global variable in react

  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3000/");
    const json = await data.json();
    setRestaurantList(json);
    setFilteredData(json);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full h-full">
      <input
        className="border rounded-lg p-3 mr-2"
        placeholder="  Search...."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="p-2 border-spacing-2 border-2 rounded-lg border-slate-400 hover:bg-2 hover:scale-105"
        type="submit"
        onClick={() => {
          const filteredList = restaurantList.filter((res) =>
            res.data.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredData(filteredList);
        }}
      >
        Search
      </button>
      <div className="flex justify-center border-solid border-black">
        <button
          onClick={() => {
            const filteredRes = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setRestaurantList(filteredRes);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="flex flex-wrap justify-center p-1">
        {filteredData.map((restroCard) => (
          <CardRes key={restroCard.data.id} resObj={restroCard} />
        ))}
      </div>
    </div>
  );
};

export default Body;
