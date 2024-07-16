import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchPressData = () => {
  const [news, setNews] = useState([]);
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://6690833cc0a7969efd9c4da4.mockapi.io/api/press_news');
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    const fetchReleases = async () => {
      try {
        const response = await axios.get('https://6690833cc0a7969efd9c4da4.mockapi.io/api/press_releases');
        setReleases(response.data);
      } catch (error) {
        console.error("Error fetching releases data:", error);
      }
    };

    fetchNews();
    fetchReleases();
  }, []);

  return { news, releases };
};