import React from 'react';
import './index.scss';
import { payout } from "../../assets";
import { useSelector } from 'react-redux';

const Payout = () => {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div className={`payout-page ${isShowAll ? "active" : ""}`}>
      <div className="content">
        <div className="payout-header">
          <h2>Payout</h2>
        </div>
        <div className="payout-content">
          <div className="next-payout">
            <h3>Next payout</h3>
            <h6>$4568.50</h6>
            <h5>via Payoneer</h5>
            <p>Your payout will be processed on <span>April 15, 2020</span></p>
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
              <tr>
                <td>$2550.54</td>
                <td>Payoneer</td>
                <td>15 Mar 2020</td>
              </tr>
              <tr>
                <td>$1950.14</td>
                <td>Payoneer</td>
                <td>15 Feb 2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payout;