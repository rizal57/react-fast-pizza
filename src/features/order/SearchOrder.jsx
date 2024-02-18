import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full border-none bg-yellow-100 px-4 py-2 text-sm text-stone-500 outline-none transition-all duration-300 ease-out placeholder:text-stone-400 focus:outline focus:outline-yellow-500 focus:ring focus:ring-yellow-200 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};
export default SearchOrder;
