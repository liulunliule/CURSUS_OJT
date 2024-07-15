export const hanldeGetQuestion = async () => {
  try {
    const response = await fetch(
      `https://66753c2ba8d2b4d072ef3683.mockapi.io/Test`
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
