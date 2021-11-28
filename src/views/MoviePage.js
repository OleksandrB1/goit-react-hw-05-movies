import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import { fetchMovieById } from "../apiService/apiService";
import Loader from "react-loader-spinner";

export default function MoviePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus("loading");
    fetchMovieById(id).then((res) => {
      setMovie(res);
      setStatus(res ? "ok" : "notFound");
    });
  }, [id]);

  return (
    <div className="moviePage">
      <button type="button" onClick={() => navigate(-1)} className="button">
        &#8592; Go back
      </button>
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
        <div>
          <div className="container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="poster"
            />
            <div className="movie">
              <h2>{`${movie.title} (${movie.release_date})`}</h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>

              {movie.genres.length > 0 && <h3>Genres</h3>}
              {movie.genres.length > 0 &&
                movie.genres.map(({ name }) => name).join(" ")}
            </div>
          </div>
          <h3>Additional information</h3>
          <ul className="navLink">
            <li>
              <NavLink
                to={`/movies/${id}/cast`}
                className={({ isActive }) => (isActive ? "active" : "link")}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/movies/${id}/reviews`}
                className={({ isActive }) => (isActive ? "active" : "link")}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Outlet />
        </div>
      )}
      {status === "notFound" && <p>`Page not found :(`</p>}
    </div>
  );
}
