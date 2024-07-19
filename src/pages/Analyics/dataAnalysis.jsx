// import { getDataChart } from "../../services/apiService";

export const handleGetDataChart = async () => {
  try {
    const response = await fetch(
      "https://66952ff94bd61d8314ca672b.mockapi.io/year/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
