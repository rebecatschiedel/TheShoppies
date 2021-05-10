import React, { useState } from "react";

export default function Search({ callAPI }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const search = form.get("search");
    if (!search) return;

    if (search === input) return;

    setInput(search);

    callAPI(input);
  }

  return (
    <section className="search-section">
      <div className="search-title-section">
        <h2>Choose 5 movies to Nominate!</h2>
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          className="search-input"
          placeholder="Search by title."
        ></input>
        <button type="submit" className="btn-danger">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </section>
  );
}
