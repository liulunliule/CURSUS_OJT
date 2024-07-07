// api.js
export const fetchUserInfo = async (targetId) => {
    try {
      const response = await fetch(
        "https://66751909a8d2b4d072eeb172.mockapi.io/InstructorProfile"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.find((item) => item.id === targetId);
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  };
  
  export const fetchUserPosts = async () => {
    try {
      const response = await fetch(
        "https://6677cf6e0bd45250561c9488.mockapi.io/course"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching user posts:", error);
      throw error;
    }
  };
  
  export const fetchUserReviews = async () => {
    try {
      const response = await fetch(
        "https://6677cf6e0bd45250561c9488.mockapi.io/reviews"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching user reviews:", error);
      throw error;
    }
  };
  
  export const fetchSubscriptions = async () => {
    try {
      const response = await fetch(
        "https://6678f8ae0bd4525056207d59.mockapi.io/subscriptions"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      throw error;
    }
  };
  