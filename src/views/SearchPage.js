import Search from "../components/Search/Search";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchMoviesBySearch } from "../apiService/apiService";
import Loader from "react-loader-spinner";

export default function SearchPage() {
  const [page, setPage] = useState();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("");

  const handleSubmit = (q) => {
    setQuery(q);
    setMovies([]);
    setPage(1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    setStatus("loading");
    fetchMoviesBySearch(query, page).then((res) => {
      setMovies(res);
      setStatus(res[0] ? "ok" : "notFound");
    });
  }, [query, page]);

  return (
    <div>
      <Search handleSubmit={handleSubmit} />
      {status === "loading" && (
        <Loader
          type="Grid"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={2000}
        />
      )}
      {status === "ok" && (
        <ul>
          {movies.map((el) => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title ?? el.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {status === "notFound" && <p>Not found</p>}
    </div>
  );
}
