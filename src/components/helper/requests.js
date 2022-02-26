import { genres } from './list_genres';

const API_KEY = 'api_key=' + process.env.REACT_APP_API_KEY;
const base_url = 'https://api.themoviedb.org/3';
export const image_url = 'https://image.tmdb.org/t/p/original/';

export const requests = {
  // MOVIES
  fetchTrending: base_url + '/trending/movie&tv/week?' + API_KEY,
  trending_movies: base_url + '/trending/movie/day?' + API_KEY,
  movies_popular: base_url + '/movie/popular?' + API_KEY,
  movies_comedy:
    base_url + '/discover/movie?' + API_KEY + `&with_genres=${genres.comedy}`,
  movies_horror:
    base_url + '/discover/movie?' + API_KEY + `&with_genres=${genres.horror}`,
  movies_documentary:
    base_url +
    '/discover/movie?' +
    API_KEY +
    `&with_genres=${genres.documentary}`,
  movies_animation:
    base_url +
    '/discover/movie?' +
    API_KEY +
    `&with_genres=${genres.animation}`,
  movies_sci_fi:
    base_url + '/discover/tv?' + API_KEY + `&with_genres=${genres.sci_fi}`,
  // TV SHOWS
  trending_series: base_url + '/trending/tv/day?' + API_KEY,
  series_comedy:
    base_url + '/discover/tv?' + API_KEY + `&with_genres=${genres.comedy}`,
  series_mystery:
    base_url + '/discover/tv?' + API_KEY + `&with_genres=${genres.mystery}`,
  series_crime:
    base_url + '/discover/tv?' + API_KEY + `&with_genres=${genres.crime}`,
  series_animation:
    base_url + '/discover/tv?' + API_KEY + `&with_genres=${genres.animation}`,
  series_music:
    base_url + '/discover/movie?' + API_KEY + `&with_genres=${genres.music}`,
};
