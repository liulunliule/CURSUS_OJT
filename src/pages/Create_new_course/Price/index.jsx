import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faMoneyBill,
    faTag,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, Outlet } from "react-router-dom";
import Free_page from "./Free";
import Paid_page from "./Paid";
function Price() {
    const [selectedOption, setSelectOption] = useState("free");
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
                {selectedOption === "paid" && <Paid_page />}
            </div>
        </div>
    );
}

export default Price;
