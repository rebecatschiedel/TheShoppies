import poster from "../images/poster.jpg";

export default function Card({ nominee, nominees, setNominees }) {
  return (
    <section className="flip-card">
      <div className="flip-card-inner">
        <div className="card flip-card-front">
          <div className="container">
            <h4>
              <b>{nominee.Title}</b>
            </h4>
            <p>{nominee.Year}</p>
          </div>
          <img src={poster} alt="poster" />
        </div>
        <div className="flip-card-back">
          <h1>{nominee.Director}</h1>
          <p>{nominee.Actors}</p>
          <button
            onClick={() =>
              setNominees(
                nominees.filter((nom) => nom.imdbID !== nominee.imdbID)
              )
            }
          >
            Remove it
          </button>
        </div>
      </div>
    </section>
  );
}
