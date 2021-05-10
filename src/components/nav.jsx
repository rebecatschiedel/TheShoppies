import logo from "../images/logo.png";

export default function NavBar({ nominees, setNominees }) {
  function removeAllNominees() {
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
      {nominees.length !== 0 && (
        <button className="btn btn-md" onClick={removeAllNominees}>
          Remove all Nominees
        </button>
      )}
    </nav>
  );
}
