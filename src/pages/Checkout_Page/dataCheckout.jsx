export const hanldeGetOrder = async () => {
  try {
    const response = await fetch(
      `https://669454774bd61d8314c73d55.mockapi.io/Order/1`
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
export const hanldeGetAddr = async () => {
  try {
    const response = await fetch(
      `https://669454774bd61d8314c73d55.mockapi.io/addr/1`
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

export const updateAddress = async (addr) => {
  try {
    const response = await fetch(
      "https://669454774bd61d8314c73d55.mockapi.io/addr/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addr),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update address");
    }

    const updatedAddr = await response.json();
    return updatedAddr;
  } catch (error) {
    console.error("Error updating address:", error);
    throw error;
  }
};
