import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '02950a717996af9fdef4339cc0050bf4';

//TRENDING
export async function getTrending() {
  const resp = await axios(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return resp.data.results;
}

//SEARCH MOVIES
export async function getMovies(value) {
  const resp = await axios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${value}&language=en-US&page=1&include_adult=false`
  );
  return resp.data.results;
}

//DETAILS
export async function getMovieById(id) {
  const resp = await axios(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return resp.data;
}

//CAST
export async function getCast(id) {
  const resp = await axios(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return resp.data.cast;
}

//REVIEWS
export async function getReview(id) {
  const resp = await axios(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return resp.data.results;
}
