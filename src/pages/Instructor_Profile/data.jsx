import axios from "axios";

export const fetchUserInfo = async (targetId) => {
  try {
    const response = await axios.get("https://66751909a8d2b4d072eeb172.mockapi.io/InstructorProfile");
    return response.data.find((item) => item.id === targetId);
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

export const fetchUserPosts = async () => {
  try {
    const response = await axios.get("https://6677cf6e0bd45250561c9488.mockapi.io/course");
    return response.data;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    throw error;
  }
};

export const fetchUserReviews = async () => {
  try {
    const response = await axios.get("https://6677cf6e0bd45250561c9488.mockapi.io/reviews");
    return response.data;
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    throw error;
  }
};

export const fetchSubscriptions = async () => {
  try {
    const response = await axios.get("https://6678f8ae0bd4525056207d59.mockapi.io/subscriptions");
    return response.data;
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    throw error;
  }
};
