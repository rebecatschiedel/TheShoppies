export default function Card({ nominee, nominees, setNominees }) {
  function handleClick() {
    const newNominees = nominees.filter((nom) => nom.imdbID !== nominee.imdbID);
    setNominees(newNominees);
    window.localStorage.setItem("movies", JSON.stringify(newNominees));
  }

  return (
    <div className="col-sm-12 col-lg-2">
      <section className="card h-100 text-white text-center">
        <div className="card-body">
          <h5 className="card-title">{nominee.Title}</h5>
          <p className="card-text">{nominee.Year}</p>
        </div>
        <img
          className="card-img-bottom"
          src={nominee.Poster}
          alt={`${nominee.Title}'s poster`}
        />
        <button className="btn text-white" onClick={handleClick}>
          Remove it
        </button>
      </section>
    </div>
  );
}
