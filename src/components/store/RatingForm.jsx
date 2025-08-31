import { useState } from "react";

const RatingForm = ({ storeId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { storeId, rating, comment });
    // TODO: Send to backend
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <label className="block mb-1">Your Rating (1–5):</label>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-1 rounded w-20"
      />
      <textarea
        placeholder="Optional comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="block w-full mt-2 p-2 border rounded"
      />
      <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
        Submit
      </button>
    </form>
  );
};

export default RatingForm;
