export default function Results({ results, nominees, setNominees }) {
  return (
    <section className="results">
      <ul>
        {results.map((result, index) => (
          <section className="movies" key={index + result.imdbID}>
            <li>
              {result.Title} - {result.Year}
            </li>
            <button
              disabled={
                nominees.some((nominee) => nominee.imdbID === result.imdbID) ||
                nominees.length >= 5
              }
              onClick={() => setNominees([...nominees, result])}
            >
              Nominate
            </button>
          </section>
        ))}
      </ul>
    </section>
  );
}
