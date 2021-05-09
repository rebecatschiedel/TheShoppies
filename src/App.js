import "./App.css";
import NavBar from "./components/nav";
import Banner from "./components/banner";
import Search from "./components/search";
import Results from "./components/results";
import { useState } from "react";
import Footer from "./components/footer";

function App() {
  const [results, setResults] = useState([]);
  const [nominees, setNominees] = useState([]);
  const [error, setError] = useState("");

  function callAPI(title) {
    setError("");
    try {
      fetch(
        `https://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.Response === "False") setError(data.Error);
          else setResults(data.Search);
        });
    } catch (e) {
      console.error("We had a problem", e);
    }
  }

  return (
    <div>
      <NavBar setNominees={setNominees} />
      <Banner setNominees={setNominees} nominees={nominees} />
      <Search callAPI={callAPI} />
      <Results
        results={results}
        setNominees={setNominees}
        nominees={nominees}
        error={error}
      />
      <Footer />
    </div>
  );
}

export default App;
