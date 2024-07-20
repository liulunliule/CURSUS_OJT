import React, { useEffect } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { Select, Table, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import {
  fetchEarningTable,
  fetchTopCountries,
} from "../../redux/features/earningSlice";

const Earnings = () => {
  const dispatch = useDispatch();
  const topCountries = useSelector((state) => state.earnings.topCountries);
  const earningTable = useSelector((state) => state.earnings.earningTable);
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const { Option } = Select;
  const { Text } = Typography;
  // const data = [
  //   { key: "1", date: "1, Wednesday", salesCount: 3, earning: 120.5 },
  //   { key: "2", date: "2, Thursday", salesCount: 2, earning: 84.0 },
  //   { key: "3", date: "4, Saturday", salesCount: 4, earning: 150.5 },
  //   { key: "4", date: "5, Sunday", salesCount: 3, earning: 102.24 },
  //   { key: "5", date: "6, Monday", salesCount: 2, earning: 80.5 },
  //   { key: "6", date: "7, Tuesday", salesCount: 3, earning: 70.5 },
  //   { key: "7", date: "8, Wednesday", salesCount: 5, earning: 130.0 },
  //   { key: "8", date: "9, Thursday", salesCount: 3, earning: 95.5 },
  //   { key: "9", date: "10, Friday", salesCount: 4, earning: 152.5 },
  //   { key: "10", date: "11, Saturday", salesCount: 3, earning: 100.4 },
  //   { key: "11", date: "12, Sunday", salesCount: 2, earning: 60.14 },
  // ];

  const totalSalesCount = earningTable.reduce(
    (acc, item) => acc + item.salesCount,
    0
  );
  const totalEarning = earningTable
    .reduce((acc, item) => acc + item.earning, 0)
    .toFixed(2);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Item Sales Count",
      dataIndex: "salesCount",
      key: "salesCount",
    },
    {
      title: "Earning",
      dataIndex: "earning",
      key: "earning",
      render: (text) => `$${text.toFixed(2)}`,
    },
  ];

  useEffect(() => {
    dispatch(fetchTopCountries());
    dispatch(fetchEarningTable());
  }, [dispatch]);
  return (
    <div className={`earning ${isShowAll ? "" : "active"}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="statement_title">
              <FontAwesomeIcon icon={faDollarSign} className="statement_icon" />{" "}
              Earning
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div class="earning_steps">
              <p>
                Sales earnings this month (April), after edututs+ fees, &amp;
                before taxes:
              </p>
              <h2>$1146.78</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div class="earning_steps">
              <p>Your balance:</p>
              <h2>$1146.78</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div class="earning_steps">
              <p>Total value of your sales, before taxes:</p>
              <h2>$95895.54</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div class="top_countries">
              <div class="top_countries_title">
                <h2>Your Top Countries</h2>
              </div>
              {/* map */}
              <ul class="country_list">
                {topCountries.map((item) => (
                  <li>
                    <div class="country_item">
                      <div class="country_item_left">
                        <span>{item.Country}</span>
                      </div>
                      <div class="country_item_right">
                        <span>${item.Earn}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="date_selector">
              <div className="select">
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="item sale"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="total sale">total sale</Option>
                  <Option value="2023">2023</Option>
                  <Option value="2024">2024</Option>
                </Select>
              </div>
            </div>
            <div className="earning_table">
              <div>
                <Table
                  dataSource={earningTable}
                  columns={columns}
                  pagination={false}
                  summary={() => (
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={0}>
                        <Text strong>Total</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={1}>
                        <Text strong>{totalSalesCount}</Text>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2}>
                        <Text strong>${totalEarning}</Text>
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
