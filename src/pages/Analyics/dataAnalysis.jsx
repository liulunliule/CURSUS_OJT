import { getDataChart } from "../../services/apiService";

export const handleGetDataChart = async () => {
    try {
        const response = await getDataChart();
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
