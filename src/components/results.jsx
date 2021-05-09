import { useState } from "react";

export default function Results({ results, nominees, setNominees, error }) {
  const [movie, setMovie] = useState({});

  function getMovie(id) {
    try {
      fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
        //handle error
        .then((res) => res.json())
        .then((data) => setMovie(data));
    } catch (e) {
      console.error("We had a problem", e);
    }
  }

  function handleClick(result) {
    const newNominees = [...nominees, result];
    window.localStorage.setItem("movies", JSON.stringify(newNominees));
    setNominees(newNominees);
  }

  return (
    <section className="results">
      <ul className="list-group">
        {error ? (
          <h3 className="text-light">{error}</h3>
        ) : (
          results.map((result, index) => (
            <section
              className="list-group-item flex-column"
              key={index + result.imdbID}
            >
              <div className="d-flex w-100 justify-content-between">
                <button onClick={() => getMovie(result.imdbID)}>+</button>
                <li>
                  {result.Title} - {result.Year}
                </li>
                <button
                  disabled={
                    nominees.some(
                      (nominee) => nominee.imdbID === result.imdbID
                    ) || nominees.length >= 5
                  }
                  onClick={() => handleClick(result)}
                >
                  Nominate
                </button>
              </div>
              {movie.imdbID === result.imdbID && (
                <div className="details">
                  <p className="mb-2 mt-2">
                    <b>Director:</b> {movie.Director}
                  </p>
                  <p className="mb-2 mt-2">{movie.Plot}</p>
                </div>
              )}
            </section>
          ))
        )}
      </ul>
    </section>
  );
}
