import CardRes from "../components/Restrocard";
import { restaurantLists } from "../utils/constants";
import { useState } from "react";
const SearchComponent = () => {
  return (
    <div className="flex justify-center p-2 space-2">
      <input
        className="border rounded-lg p-3 mr-2"
        placeholder="  Search...."
      />
      <button
        className="p-2 border-spacing-2 border-2 rounded-lg border-slate-400 hover:bg-2 hover:scale-105"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

const Body = () => {
  // first hook use state
  // it is like global variable in react
  const [restaurantList, setRestaurantList] = useState(restaurantLists);
  return (
    <div className="w-full h-full">
      <SearchComponent />
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
        {restaurantList.map((restroCard) => (
          <CardRes key={restroCard.data.id} resObj={restroCard} />
        ))}
      </div>
    </div>
  );
};

export default Body;
