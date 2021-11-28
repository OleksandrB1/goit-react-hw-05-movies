import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("./views/HomePages"));
const Search = lazy(() => import("./views/SearchPage"));
const MoviePage = lazy(() => import("./views/MoviePage"));
const Cast = lazy(() => import("./views/Cast"));
const Reviews = lazy(() => import("./views/Reviews"));

function App() {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            type="Grid"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={2000}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Search />} />
          <Route path="/movies/:id" element={<MoviePage />}>
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
