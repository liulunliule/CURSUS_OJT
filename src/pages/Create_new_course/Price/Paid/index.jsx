import React, { useState } from "react";
import "./index.scss";

function Paid_page({ price, onPriceChange }) {
  const [inputPrice, setInputPrice] = useState(price || ""); // Initialize with price prop or empty

  const handleUseClick = () => {
    if (!isNaN(inputPrice) && inputPrice.trim() !== "") {
      onPriceChange(Number(inputPrice)); // Update price in parent
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
            onChange={(e) => setInputPrice(e.target.value)}
            placeholder="$0"
          />
          <button type="button" onClick={handleUseClick}>
            Use
          </button>
        </form>
      </div>
    </div>
  );
}

export default Paid_page;
