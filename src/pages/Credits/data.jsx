import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchCreditsData = () => {
  const [addedCredits, setAddedCredits] = useState({});
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchAddedCredits = async () => {
      try {
        const response = await axios.get('https://6691ca7d26c2a69f6e90b0fd.mockapi.io/api/added_credits');
        setAddedCredits(response.data[0]);
      } catch (error) {
        console.error("Error fetching added credits data:", error);
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://6691ca7d26c2a69f6e90b0fd.mockapi.io/api/transactions');
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