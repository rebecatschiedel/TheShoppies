import Card from "./card";

export default function Banner({ nominees, setNominees }) {
  return (
    <div className="banner">
      {nominees.map((nominee, index) => (
        <Card
          nominee={nominee}
          key={index + nominee.imdbID}
          setNominees={setNominees}
          nominees={nominees}
        />
      ))}
    </div>
  );
}
