import { useState } from "react";
import RatingForm from "./RatingForm";

const StoreCard = ({ store }) => {
  const [showRating, setShowRating] = useState(false);

  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold">{store.name}</h2>
      <p>{store.description}</p>
      <p className="text-sm text-gray-600">📍 {store.location}</p>
      <p>⭐ {store.rating.toFixed(1)} / 5</p>
      <button
        className="mt-2 text-blue-600 underline"
        onClick={() => setShowRating(!showRating)}
      >
        {showRating ? "Cancel" : "Rate this store"}
      </button>
      {showRating && <RatingForm storeId={store.id} />}
    </div>
  );
};

export default StoreCard;
