import { useState, useEffect } from "react";
import axios from "axios";
import {
    fetchCreditData,
    fetchTransactionsData,
} from "../../services/apiService";

export const useFetchCreditsData = () => {
    const [addedCredits, setAddedCredits] = useState({});
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchAddedCredits = async () => {
            try {
                const response = await fetchCreditData();
                setAddedCredits(response.data[0]);
            } catch (error) {
                console.error("Error fetching added credits data:", error);
            }
        };

        const fetchTransactions = async () => {
            try {
                const response = await fetchTransactionsData();
                setTransactions(response.data);
            } catch (error) {
                console.error("Error fetching transactions data:", error);
            }
        };

        fetchAddedCredits();
        fetchTransactions();
    }, []);

    return { addedCredits, transactions };
};
