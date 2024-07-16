import { useState, useEffect } from "react";
import axios from "axios";
import { fetchOfficesData } from "../../services/apiService";

export const useFetchOffices = () => {
    const [offices, setOffices] = useState([]);

    useEffect(() => {
        fetchOfficesData()
            .then((response) => {
                setOffices(response.data);
            })
            .catch((error) => {
                console.error("Error fetching office data:", error);
            });
    }, []);

    return offices;
};
