import axios from 'axios';

export const getKinoApi = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=7d23cc62b7c3bc600e9baf82b9466a16`
  );
  return response;
};

export const fetchMovieBySearch = async search => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=7d23cc62b7c3bc600e9baf82b9466a16&language=en-US&query=${search}&include_adult=false`
  );
  return response;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=7d23cc62b7c3bc600e9baf82b9466a16&language=en-US`
  );
  return response;
};
