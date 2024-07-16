import axios from "axios";
export const fetchUserMessage = async () => {
    try {
      const response = await axios.get("https://6694e50b4bd61d8314c916af.mockapi.io/Message");
      return response.data;
    } catch (error) {
      console.error("Error fetching user posts:", error);
      throw error;
    }
  };
  export const fetchUserNotification = async () => {
    try {
      const response = await axios.get("https://66751909a8d2b4d072eeb172.mockapi.io/notification");
      return response.data;
    } catch (error) {
      console.error("Error fetching user posts:", error);
      throw error;
    }
  };