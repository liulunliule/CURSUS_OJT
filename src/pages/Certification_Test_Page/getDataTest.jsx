import { getQuestion } from "../../services/apiService";

export const hanldeGetQuestion = async () => {
    try {
        const response = await getQuestion();
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching user reviews:", error);
        throw error;
    }
};
