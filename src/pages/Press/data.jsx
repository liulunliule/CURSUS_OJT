import { useState, useEffect } from "react";
import axios from "axios";
import { fetchPressData, fetchReleasesData } from "../../services/apiService";

export const useFetchPressData = () => {
    const [news, setNews] = useState([]);
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetchPressData();
                setNews(response.data);
            } catch (error) {
                console.error("Error fetching news data:", error);
            }
        };

        const fetchReleases = async () => {
            try {
                const response = await fetchReleasesData();
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
