import React from "react";
import "./index.scss";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { search } from "../../assets";
import { Table, Button } from "antd";
import { useSelector } from "react-redux";

const Students_statement = () => {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const { Option } = Select;
  const data = [
    {
      key: "1",
      date: "13 Apr 2020",
      orderId: "123456",
      type: "Buy",
      title: "Course Title Here",
      amount: "$17",
      invoice: "View",
    },
    {
      key: "2",
      date: "10 Apr 2020",
      orderId: "123456",
      type: "Buy",
      title: "Course Title Here",
      amount: "$22",
      invoice: "View",
    },
    {
      key: "3",
      date: "5 Apr 2020",
      orderId: "123456",
      type: "Buy",
      title: "Course Title Here",
      amount: "$10",
      invoice: "View",
    },
    {
      key: "4",
      date: "3 Apr 2020",
      orderId: "123456",
      type: "Buy",
      title: "Course Title Here",
      amount: "$8",
      invoice: "View",
    },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
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
                Statements
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
                    If you are not an instrutor, you can't use this section.
                  </p>
                  <Link className="apply_instructor_btn">
                    Become a Instructor
                  </Link>
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
            <div class="col-lg-12 col-md-12">
              <ul class="more_options_tt">
                <li>
                  <button class="more_items activee">This Month</button>
                </li>
                <li>
                  <button class="more_items">Last Month</button>
                </li>
                <li>
                  <div class="explore_search">
                    <div class="UI search">
                      <div class="UI">
                        <input
                          class="search_input"
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
                <Table dataSource={data} columns={columns} pagination={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students_statement;
