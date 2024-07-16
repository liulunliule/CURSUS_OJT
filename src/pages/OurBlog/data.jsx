import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://668f4a0880b313ba09178dee.mockapi.io/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  return blogs;
};