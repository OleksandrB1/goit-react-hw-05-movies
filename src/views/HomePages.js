import { fetchTrends } from "../apiService/apiService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    fetchTrends().then((res) => {
      setTrends(res);
    });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul className="trendsList">
        {trends.map((el) => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.title ?? el.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
