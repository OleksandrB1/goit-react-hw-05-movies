import { useState } from "react";

export default function Search({ handleSubmit }) {
  const [query, setQuery] = useState("");

  const handleSearchInput = (e) => {
    const value = e.currentTarget.value.toLowerCase();
    setQuery(value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(query);
      }}
    >
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleSearchInput}
        required
      />
    </form>
  );
}
