import { useState, useEffect } from "react";
import axios from "axios";
import {
    fetchNextPayoutData,
    fetchTransactionsData,
} from "../../services/apiService";

export const useFetchPayoutData = () => {
    const [nextPayout, setNextPayout] = useState({});
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchNextPayout = async () => {
            try {
                const response = await fetchNextPayoutData();
                setNextPayout(response.data[0]);
            } catch (error) {
                console.error("Error fetching next payout data:", error);
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

        fetchNextPayout();
        fetchTransactions();
    }, []);

    return { nextPayout, transactions };
};
