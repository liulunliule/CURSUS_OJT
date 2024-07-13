import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchPayoutData = () => {
  const [nextPayout, setNextPayout] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchNextPayout = async () => {
      try {
        const response = await axios.get('https://6691d15226c2a69f6e90c6fa.mockapi.io/api/next_payout');
        setNextPayout(response.data[0]);
      } catch (error) {
        console.error("Error fetching next payout data:", error);
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://6691d15226c2a69f6e90c6fa.mockapi.io/api/transactions');
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