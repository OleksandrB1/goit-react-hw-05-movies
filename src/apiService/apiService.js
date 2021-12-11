import axios from "axios";

const fetchTrends = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=fcf8b037a5405f4458bbdf1c2bb8718f`
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
      `https://api.themoviedb.org/3/search/movie?api_key=fcf8b037a5405f4458bbdf1c2bb8718f&query=${searchQuery}&page=${currentPage}&language=en-US`
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
      `https://api.themoviedb.org/3/movie/${id}?api_key=fcf8b037a5405f4458bbdf1c2bb8718f&language=en-US`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCast = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fcf8b037a5405f4458bbdf1c2bb8718f&language=en-US`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchReviews = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=fcf8b037a5405f4458bbdf1c2bb8718f&language=en-US&page=1`
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
