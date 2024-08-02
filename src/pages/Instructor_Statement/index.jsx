import React, { useEffect, useState } from "react";
import "./index.scss";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { search } from "../../assets";
import { Table, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInstructorStatement,
  fetchStatementTable,
} from "../../redux/features/statementSlice";

const Instructor_statement = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.account);
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const statementData = useSelector((state) => state.statement.data);
  const statementStatus = useSelector((state) => state.statement.status);
  const instructorData = useSelector((state) => state.statement.instructorData);
  const instructorStatus = useSelector(
    (state) => state.statement.instructorStatus
  );
  const [activeItem, setActiveItem] = useState("This Month");

  const { Option } = Select;

  useEffect(() => {
    console.log(account.id);
    if (account) {
      if (statementStatus === "idle") {
        dispatch(fetchStatementTable(account?.id));
      }
      if (instructorStatus === "idle") {
        dispatch(fetchInstructorStatement(account?.id));
      }
    }
    // console.log("instructorData", instructorData);
  }, [statementStatus, instructorStatus, account.id, dispatch]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Order ID",
      dataIndex: "OrderId",
      key: "OrderId",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
      render: (text) => <Button type="link">{text}</Button>,
    },
  ];

  const months = [
    "January 2024",
    "February 2024",
    "March 2024",
    "April 2024",
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
  ];
  return (
    <div>
      <div className={`statement ${isShowAll ? "" : "active"}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="statement_title">
                <FontAwesomeIcon icon={faFile} className="statement_icon" />{" "}
                Instructor Statements
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="top_countries">
                <div className="top_countries_title">
                  <h2>Earnings</h2>
                </div>
                <div className="statement_content">
                  <p className="statement-body">
                    Your sales earnings over the last 30 days
                  </p>
                  <table className="statement-summary__table">
                    <thead>
                      <tr>
                        <th>
                          <p className="t-heading">My funds</p>
                        </th>
                        <th>
                          <p className="t-heading">Earnings</p>
                        </th>
                        <th>
                          <p className="t-heading">Cursus Fees</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="statement-summary__funds">
                          <p className="js-earnings__instructor-funds-wrapper">
                            <span className=""></span>
                            <span className="js-earnngs__instructor-funds t-currency">
                              ${instructorData.funds}
                            </span>
                          </p>
                        </td>
                        <td className="statement-summary__earnings">
                          <p className="js-earnings__earnings-wrapper">
                            <span className="tt__earning">+</span>
                            <span className="js-earnings__earnings t-currency">
                              ${instructorData.Earnings}
                            </span>
                          </p>
                        </td>
                        <td className="statement-summary__fees">
                          <p className="js-earnings__fees-wrapper">
                            <span className="tt__earning">-</span>
                            <span className="js-earnings__fees t-currency">
                              ${instructorData.Fees}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="top_countries">
                <div className="top_countries_title">
                  <h2>View Invoices</h2>
                </div>
                <div className="statement_invoice_content">
                  <div className="select_month">
                    <Select
                      showSearch
                      style={{
                        width: "100%",
                        height: "35.8px",
                      }}
                      placeholder="Monthly Invoices"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                    >
                      {months.map((month, index) => (
                        <Option key={index} value={month}>
                          {month}
                        </Option>
                      ))}
                    </Select>
                    <button className="statement_download_btn">
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="dowload_icon"
                      />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <ul className="more_options_tt">
                <li>
                  <button
                    className={`more_items ${
                      activeItem === "This Month" ? "activee" : ""
                    }`}
                    onClick={() => setActiveItem("This Month")}
                  >
                    This Month
                  </button>
                </li>
                <li>
                  <button
                    className={`more_items ${
                      activeItem === "Last Month" ? "activee" : ""
                    }`}
                    onClick={() => setActiveItem("Last Month")}
                  >
                    Last Month
                  </button>
                </li>
                <li>
                  <div className="explore_search">
                    <div className="UI search">
                      <div className="UI">
                        <input
                          className="search_input"
                          type="text"
                          placeholder="Document Number"
                        />
                        <img
                          src={search}
                          alt="Search Icon"
                          className="search-icon"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="statement_table">
                <Table
                  dataSource={statementData}
                  columns={columns}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor_statement;
