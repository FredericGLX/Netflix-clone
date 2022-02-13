import { genres } from './list_genres';

const API_KEY = 'api_key=' + process.env.REACT_APP_API_KEY;
const base_url = 'https://api.themoviedb.org/3';
export const image_url = 'https://image.tmdb.org/t/p/w500/';

export const requests = {
  fetchTrending: base_url + '/trending/movie/week?' + API_KEY,
  trending_movies: base_url + '/trending/movie/day?' + API_KEY,
  trending_tv_shows: base_url + '/trending/tv/day?' + API_KEY,
  popular: base_url + '/movie/popular?' + API_KEY,
  // search: base_url + '/search/keyword?' + API_KEY + '&page=1',
  genre: base_url + '/genre/movie/list?' + API_KEY,
  comedy:
    base_url + '/discover/movie?' + API_KEY + `&with_genres=${genres.comedy}`,
  horror:
    base_url + '/discover/movie?' + API_KEY + `&with_genres=${genres.horror}`,
  documentary:
    base_url +
    '/discover/movie?' +
    API_KEY +
    `&with_genres=${genres.documentary}`,
  animation:
    base_url +
    '/discover/movie?' +
    API_KEY +
    `&with_genres=${genres.animation}`,
  sci_fi:
    base_url + '/discover/movie?' + API_KEY + `&with_genres=${genres.sci_fi}`,
};

export const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

export const reduceText = (text, number) => {
  return text?.length > number ? text.substr(0, number - 1) + '...' : text;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const handleWatchlist = (objectData) => {
  let result = [];
  let storageArray = JSON.parse(localStorage.getItem('currentWatchlist'));
  if (!storageArray) {
    result.push(objectData);
    localStorage.setItem('currentWatchlist', JSON.stringify(result));
  }
  if (storageArray) {
    let existingItem = storageArray.find((item) => item.id === objectData.id);
    if (existingItem) {
      result = storageArray.filter((item) => item.id !== objectData.id);
    } else {
      result = [...storageArray, objectData];
    }
  }

  localStorage.setItem('currentWatchlist', JSON.stringify(result));
};
