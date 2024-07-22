import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMoneyBill,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import Free_page from "./Free";
import Paid_page from "./Paid";

function Price() {
  const [selectedOption, setSelectOption] = useState("free");
  const [price, setPrice] = useState(0); // Default price is 0

  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
    setSelectOption("paid");
  };

  return (
    <div className="create_course_price">
      <div className="price_title">
        <FontAwesomeIcon icon={faMoneyBill} className="price_icon" />
        Price
      </div>
      <div className="price_form">
        <div className="price_link-list">
          <button
            className={`price_link ${
              selectedOption === "free" ? "active" : ""
            }`}
            onClick={() => setSelectOption("free")}
          >
            <FontAwesomeIcon
              icon={faTag}
              style={{ marginRight: "5px", fontSize: "18px" }}
            />
            Free
          </button>
          <button
            className={`price_link ${
              selectedOption === "paid" ? "active" : ""
            }`}
            onClick={() => setSelectOption("paid")}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ marginRight: "5px" }}
            />
            Paid
          </button>
        </div>
        {selectedOption === "free" && <Free_page />}
        {selectedOption === "paid" && (
          <Paid_page price={price} onPriceChange={handlePriceChange} />
        )}
      </div>
    </div>
  );
}

export default Price;
