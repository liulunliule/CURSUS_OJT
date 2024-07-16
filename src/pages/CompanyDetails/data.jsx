import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchOffices = () => {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    axios.get("https://668f4a0880b313ba09178dee.mockapi.io/api/offices")
      .then(response => {
        setOffices(response.data);
      })
      .catch(error => {
        console.error("Error fetching office data:", error);
      });
  }, []);

  return offices;
};