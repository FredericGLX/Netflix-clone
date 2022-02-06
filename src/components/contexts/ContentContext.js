import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { getRandomNumber, requests } from '../helper/helper';

const ContentContext = React.createContext();

export function useContentData() {
  return useContext(ContentContext);
}

export function ContentProvider({ children }) {
  const [trendingNowData, setTrendingNowData] = useState({});
  const [popularData, setPopularData] = useState({});
  const [comedyData, setComedyData] = useState({});
  const [horrorData, setHorrorData] = useState({});
  const [documentaryData, setDocumentaryData] = useState({});
  const [animationData, setAnimationData] = useState({});
  const [scifiData, setScifiData] = useState({});

  // Get data for homepage banner + Trending Now row
  const fetchTrendingNow = async () => {
    const { data } = await axios.get(requests.fetchTrending);
    setTrendingNowData(data.results);
  };

  const fetchPopular = async () => {
    const { data } = await axios.get(requests.popular);
    setPopularData(data.results);
  };
  const fetchComedy = async () => {
    const { data } = await axios.get(requests.comedy);
    setComedyData(data.results);
  };
  const fetchHorror = async () => {
    const { data } = await axios.get(requests.horror);
    setHorrorData(data.results);
  };
  const fetchAnimation = async () => {
    const { data } = await axios.get(requests.animation);
    setAnimationData(data.results);
  };
  const fetchScifi = async () => {
    const { data } = await axios.get(requests.sci_fi);
    setScifiData(data.results);
  };
  const fetchDocumentary = async () => {
    const { data } = await axios.get(requests.documentary);
    setDocumentaryData(data.results);
  };

  useEffect(() => {
    fetchTrendingNow();
    fetchPopular();
    fetchComedy();
    fetchHorror();
    fetchDocumentary();
    fetchAnimation();
    fetchScifi();
  }, []);

  const value = {
    trendingNowData,
    popularData,
    comedyData,
    horrorData,
    documentaryData,
    animationData,
    scifiData,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}
