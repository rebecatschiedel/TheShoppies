import React, { useState } from "react";

export default function Search({ callAPI }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    callAPI(input);
  }

  return (
    <section className="search-section">
      <h2 className="search-title">Choose 5 movies to Nominate!</h2>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search by title."
        ></input>
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
