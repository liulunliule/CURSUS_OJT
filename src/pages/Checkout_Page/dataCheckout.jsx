import { getGetAddr, getOrder } from "../../services/apiService";

export const hanldeGetOrder = async () => {
    try {
        const response = await getOrder();
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
        const response = await getGetAddr();
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
        const response = await updateAddress(addr);
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
