import React from 'react';
import './index.scss';
import { payout } from "../../assets";
import { useSelector } from 'react-redux';
import { useFetchPayoutData } from './data';

const Payout = () => {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const { nextPayout, transactions, status, error } = useFetchPayoutData();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`payout-page ${isShowAll ? "active" : ""}`}>
      <div className="content">
        <div className="payout-header">
          <h2>Payout</h2>
        </div>
        <div className="payout-content">
          <div className="next-payout">
            <h3>Next payout</h3>
            <h6>{nextPayout.amount}</h6>
            <h5>via {nextPayout.method}</h5>
            <p>Your payout will be processed on <span>{nextPayout.date}</span></p>
          </div>
          <div className="payout-account">
            <h3>Payout account</h3>
            <div className="account-details">
              <img src={payout} alt="Payout" />
              <p>Added: 01 Mar 2020</p>
            </div>
            <button>Set Account</button>
          </div>
        </div>
        <div className="transactions">
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Payout Method</th>
                <th>Date Processed</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.amount}</td>
                  <td>{transaction.method}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payout;