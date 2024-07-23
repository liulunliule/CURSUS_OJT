import React, { useState } from "react";
import "./index.scss";

function Paid_page({ price, onPriceChange }) {
  const [inputPrice, setInputPrice] = useState(price || ""); // Initialize with price prop or empty

  const handlePriceChange = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setInputPrice(value);
      onPriceChange(Number(value)); // Update price in parent
    }
  };

  return (
    <div className="paid_page">
      <div className="paid_page-input">
        <label htmlFor="regular_price">Regular Price*</label>
        <form className="paid_page-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="regular_price"
            value={inputPrice}
            onChange={handlePriceChange}
            placeholder="$0"
          />
        </form>
      </div>
    </div>
  );
}

export default Paid_page;
