import React from 'react';
import './index.scss';
import { MasterCard } from "../../assets";
import { useSelector } from 'react-redux';
import { useFetchCreditsData } from './data';

const Credits = () => {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const { addedCredits, transactions, status, error } = useFetchCreditsData();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`credits-page ${isShowAll ? "active" : ""}`}>
      <div className="content">
        <div className="credits-header">
          <h2>Credits</h2>
        </div>
        <div className="credits-content">
          <div className="added-credits">
            <h3>Added Credits</h3>
            <h6>{addedCredits.amount}</h6>
            <h5>via {addedCredits.method}</h5>
            <p>Your credits will be used on <span>{addedCredits.description}</span></p>
          </div>
          <div className="saved-cards">
            <h3>Saved Cards</h3>
            <div className="card">
              <img src={MasterCard} alt="MasterCard" />
              <p>Added: 25 Mar 2020</p>
              <button>Change Card</button>
            </div>
          </div>
          <div className="add-credit-balance">
            <h3>Add Credit Balance</h3>
            <form>
              <div className="form-row">
                <label>
                  Add Balance
                  <input type="text" placeholder="$0" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Holder Name
                  <input type="text" placeholder="Enter Holder Name" />
                </label>
                <label>
                  Card Number
                  <input type="text" placeholder="Card #" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Expiration Month
                  <select>
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </label>
                <label>
                  Expiration Year
                  <input type="text" placeholder="Year" />
                </label>
                <label>
                  Expiration Year
                  <input type="text" placeholder="CVC" />
                </label>
              </div>
              <button type="submit">Add Credit</button>
            </form>
          </div>
        </div>
        <div className="transactions">
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Credit Method</th>
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

export default Credits;