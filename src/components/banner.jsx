import { useEffect } from "react";
import Card from "./card";

export default function Banner({ nominees, setNominees }) {
  useEffect(() => {
    let movies = window.localStorage.getItem("movies");
    movies = JSON.parse(movies);

    if (movies) setNominees(movies);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {nominees.length === 0 ? (
        <div className="banner-title-section">
          <section className="banner-title">
            <h1>Place your Nominees</h1>
          </section>
        </div>
      ) : (
        <div className="banner row">
          {nominees.map((nominee, index) => (
            <Card
              nominee={nominee}
              key={index + nominee.imdbID}
              setNominees={setNominees}
              nominees={nominees}
            />
          ))}
        </div>
      )}
    </>
  );
}
