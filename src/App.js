import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/films")
      .then(({ data }) => {
        setLoading(false);
        setData(data);
        setError(false);
      })
      .catch((err) => setError(true));
  }, [data]);

  const films = data?.results.map((f) => <li key={f.episode_id}>{f.title}</li>);

  if (error) return <p>Error!</p>;
  return !loading ? films : <p>Loading...</p>;
}

export default App;
