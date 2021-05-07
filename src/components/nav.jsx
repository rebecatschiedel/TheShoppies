import logo from "../images/logo.png";

export default function NavBar({ setNominees }) {
  function handleClick() {
    setNominees([]);
    window.localStorage.removeItem("movies");
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt=""
        />
        <b>The Shoppies</b>
      </div>
      <button className="btn btn-md" onClick={handleClick}>
        Remove all Nominees
      </button>
    </nav>
  );
}
