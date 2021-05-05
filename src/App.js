import "./App.css";
import NavBar from "./components/nav";
import Banner from "./components/banner";
import Search from "./components/search";
import Results from "./components/results";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [nominees, setNominees] = useState([]);

  function callAPI(title) {
    const query = title;

    try {
      fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data.Search));
      // .then((data) => setResults(data));
    } catch (e) {
      console.error("We had a problem", e);
    }
  }

  return (
    <div>
      <NavBar />
      <Banner setNominees={setNominees} nominees={nominees} />
      <Search callAPI={callAPI} />
      <Results
        results={results}
        setNominees={setNominees}
        nominees={nominees}
      />
    </div>
  );
}

export default App;
