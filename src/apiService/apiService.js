import axios from "axios";

export const API = {
  URL: "https://api.themoviedb.org/3",
  KEY: "fcf8b037a5405f4458bbdf1c2bb8718f",
};

const fetchTrends = async () => {
  try {
    const { data } = await axios.get(
      `${API.URL}/trending/movie/day?api_key=${API.KEY}`
    );
    const trending = data.results;
    return trending;
  } catch (error) {
    console(error);
  }
};

const fetchMoviesBySearch = async (searchQuery, currentPage) => {
  try {
    const { data } = await axios.get(
      `${API.URL}/search/movie?api_key=${API.KEY}&query=${searchQuery}&page=${currentPage}&language=en-US`
    );

    const results = data.results;

    return results;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovieById = async (id) => {
  try {
    const { data } = await axios.get(
      `${API.URL}/movie/${id}?api_key=${API.KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCast = async (id) => {
  try {
    const { data } = await axios.get(
      `${API.URL}/movie/${id}/credits?api_key=${API.KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchReviews = async (id) => {
  try {
    const { data } = await axios.get(
      `${API.URL}/movie/${id}/reviews?api_key=${API.KEY}&language=en-US&page=1`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchTrends,
  fetchMoviesBySearch,
  fetchMovieById,
  fetchCast,
  fetchReviews,
};
