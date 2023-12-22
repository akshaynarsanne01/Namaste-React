import { RATINGSVG } from "../utils/constants";

const CardRes = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, deliveryTime, area } =
    props?.resObj?.data;
  return (
    <div className="border w-60 m-4 rounded-lg shadow-lg hover:cursor-pointer hover:scale-110 transition 100ms">
      <img
        className="w-full p-1 rounded-lg"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className="m-4">
        <h1 className="mt-2 mb-1 h-7 text-xl overflow-hidden">{name}</h1>
        <div className="flex justify-content space">
          <img className="w-4" src={RATINGSVG} />
          <span className="ml-1 text-lg">{avgRating}</span>
          <span className="ml-3 text-lg "> • {deliveryTime} Mins</span>
        </div>
        <h3>{cuisines.join(", ")}</h3>
      </div>
    </div>
  );
};

export default CardRes;
