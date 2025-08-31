import StoreCard from "./StoreCard";
import SearchBar from "../common/SearchBar";
import { useState, useEffect } from "react";

const mockStores = [
  { id: 1, name: "Tech Haven", description: "Electronics & gadgets", location: "Pune", rating: 4.2 },
  { id: 2, name: "Book Nook", description: "Books & stationery", location: "Mumbai", rating: 3.8 },
  { id: 3, name: "Style Hub", description: "Fashion & accessories", location: "Nagpur", rating: 4.5 },
];

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Replace with API call later
    setStores(mockStores);
  }, []);

  const filteredStores = stores.filter(store =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    store.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛍️ Store Listings</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {filteredStores.map(store => (
        <StoreCard key={store.id} store={store} />
      ))}
    </div>
  );
};

export default StoreList;
