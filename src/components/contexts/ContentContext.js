import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { requests } from '../helper/requests';

export const ContentContext = React.createContext();

export function ContentProvider({ children }) {
  const [trendingNowData, setTrendingNowData] = useState({});
  // Movies
  const [moviesPopularData, setMoviesPopularData] = useState({});
  const [trendingMovies, setTrendingMovies] = useState({});
  const [moviesComedyData, setMoviesComedyData] = useState({});
  const [moviesHorrorData, setMoviesHorrorData] = useState({});
  const [moviesDocumentaryData, setMoviesDocumentaryData] = useState({});
  const [moviesAnimationData, setMoviesAnimationData] = useState({});
  const [moviesScifiData, setMoviesScifiData] = useState({});
  // TV Shows
  const [trendingTvShows, setTrendingTvShows] = useState({});
  const [tvShowsPopularData, setTvShowsPopularData] = useState({});
  const [tvShowsComedyData, setTvShowsComedyData] = useState({});
  const [tvShowsMysteryData, setTvShowsMysteryData] = useState({});
  const [tvShowsCrimeData, setTvShowsCrimeData] = useState({});
  const [tvShowsAnimationData, setTvShowsAnimationData] = useState({});
  const [tvShowsMusicData, setTvShowsMusicData] = useState({});

  const fetchTrendingNow = async () => {
    const { data } = await axios.get(requests.fetchTrending);
    setTrendingNowData(data.results);
  };

  // MOVIES
  const fetchTrendingMovies = async () => {
    const { data } = await axios.get(requests.trending_movies);
    setTrendingMovies(data.results);
  };
  const fetchMoviesPopular = async () => {
    const { data } = await axios.get(requests.movies_popular);
    setMoviesPopularData(data.results);
  };
  const fetchMoviesComedy = async () => {
    const { data } = await axios.get(requests.movies_comedy);
    setMoviesComedyData(data.results);
  };
  const fetchMoviesHorror = async () => {
    const { data } = await axios.get(requests.movies_horror);
    setMoviesHorrorData(data.results);
  };
  const fetchMoviesAnimation = async () => {
    const { data } = await axios.get(requests.movies_animation);
    setMoviesAnimationData(data.results);
  };
  const fetchMoviesScifi = async () => {
    const { data } = await axios.get(requests.movies_sci_fi);
    setMoviesScifiData(data.results);
  };
  const fetchMoviesDocumentary = async () => {
    const { data } = await axios.get(requests.movies_documentary);
    setMoviesDocumentaryData(data.results);
  };

  const fetchAllMovies = () => {
    fetchTrendingNow();
    fetchTrendingMovies();
    fetchMoviesPopular();
    fetchMoviesComedy();
    fetchMoviesHorror();
    fetchMoviesDocumentary();
    fetchMoviesAnimation();
    fetchMoviesScifi();
  };

  // TV SHOWS
  const fetchTrendingTvShows = async () => {
    const { data } = await axios.get(requests.trending_series);
    setTrendingTvShows(data.results);
  };
  const fetchTvShowsPopular = async () => {
    const { data } = await axios.get(requests.series_popular);
    setTvShowsPopularData(data.results);
  };
  const fetchTvShowsComedy = async () => {
    const { data } = await axios.get(requests.series_comedy);
    setTvShowsComedyData(data.results);
  };
  const fetchTvShowsMystery = async () => {
    const { data } = await axios.get(requests.series_mystery);
    setTvShowsMysteryData(data.results);
  };
  const fetchTvShowsAnimation = async () => {
    const { data } = await axios.get(requests.series_animation);
    setTvShowsAnimationData(data.results);
  };
  const fetchTvShowsMusic = async () => {
    const { data } = await axios.get(requests.series_music);
    setTvShowsMusicData(data.results);
  };
  const fetchTvShowsCrime = async () => {
    const { data } = await axios.get(requests.series_crime);
    setTvShowsCrimeData(data.results);
  };

  const fetchAllSeries = () => {
    fetchTrendingTvShows();
    // fetchTvShowsPopular();
    fetchTvShowsComedy();
    fetchTvShowsMystery();
    fetchTvShowsCrime();
    fetchTvShowsAnimation();
    fetchTvShowsMusic();
  };

  useEffect(() => {
    fetchAllMovies();
    fetchAllSeries();
  }, []);

  const value = {
    // Movies
    trendingNowData,
    trendingTvShows,
    trendingMovies,
    moviesPopularData,
    moviesComedyData,
    moviesHorrorData,
    moviesDocumentaryData,
    moviesAnimationData,
    moviesScifiData,
    // TV Shows
    tvShowsComedyData,
    trendingTvShows,
    tvShowsMysteryData,
    tvShowsMusicData,
    tvShowsAnimationData,
    tvShowsCrimeData,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
