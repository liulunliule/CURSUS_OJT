import React, { useEffect, useState } from "react";
import "./index.scss";
import { UilAnalysis } from "@iconscout/react-unicons";
import { Bar, Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
  LineElement,
  PointElement,
} from "chart.js";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Image, Table } from "antd";
import { render } from "@testing-library/react";
import { thumbnail } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalyticsData } from "../../redux/features/analyticsSlice";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Analyics = () => {
  const dispatch = useDispatch();
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const chartData = useSelector((state) => state.analytics.data);
  const chartDataStatus = useSelector((state) => state.analytics.status);
  const [activeTab, setActiveTab] = useState("user");
  // const [chartData, setChartData] = useState(null);
  const dataSubscribers = {
    labels: chartData?.months,
    datasets: [
      {
        label: "Subscribers",
        data: chartData?.subscribers,
        backgroundColor: "red",
        // barPercentage: 0.5,
        barThickness: 8,
        // maxBarThickness: 10,
        // minBarLength: 2,
      },
    ],
  };
  const dataVisitors = {
    labels: chartData?.weekly,
    datasets: [
      {
        label: "old",
        data: chartData?.weeklyVisistors.old,
        borderWidth: 2,
        borderColor: "orange",
        backgroundColor: "rgba(255, 165, 0, 0.1)",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "orange",
        pointBorderWidth: 2,
        pointStyle: "circle",
        pointRadius: 5,
        fill: false,
        tension: 0.4,
      },
      {
        label: "new",
        data: chartData?.weeklyVisistors.new,
        borderWidth: 2,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "red",
        pointBorderWidth: 2,
        pointStyle: "circle",
        pointRadius: 5,
        fill: false,
        tension: 0.4,
      },
    ],
  };
  //not Done
  const [dataUserActivity, setDataUserActivity] = useState({
    labels: chartData?.monthsActivity,
    datasets: [
      {
        label: "old",
        data: chartData?.userActivity.old,
        borderWidth: 2,
        borderColor: "orange",
        backgroundColor: "rgba(255, 165, 0, 0.1)",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "orange",
        pointBorderWidth: 2,
        pointStyle: "circle",
        pointRadius: 5,
        fill: false,
        tension: 0,
        borderDash: [5, 5], // Dashed line
      },
      {
        label: "new",
        data: chartData?.userActivity.new,
        borderWidth: 2,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "red",
        pointBorderWidth: 2,
        pointStyle: "circle",
        pointRadius: 5,
        fill: false,
        tension: 0,
      },
    ],
  });
  const updateDataUserActivity = (tab) => {
    const activityData = getActivityData(tab);
    setDataUserActivity({
      labels: chartData?.monthsActivity,
      datasets: [
        {
          label: "old",
          data: activityData.old,
          borderWidth: 2,
          borderColor: "orange",
          backgroundColor: "rgba(255, 165, 0, 0.1)",
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "orange",
          pointBorderWidth: 2,
          pointStyle: "circle",
          pointRadius: 5,
          fill: false,
          tension: 0,
          borderDash: [5, 5], // Dashed line
        },
        {
          label: "new",
          data: activityData.new,
          borderWidth: 2,
          borderColor: "red",
          backgroundColor: "rgba(255, 0, 0, 0.1)",
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "red",
          pointBorderWidth: 2,
          pointStyle: "circle",
          pointRadius: 5,
          fill: false,
          tension: 0,
        },
      ],
    });
  };
  const getActivityData = (tab) => {
    switch (tab) {
      case "session":
        return {
          old: chartData?.sessionsActivity.old,
          new: chartData?.sessionsActivity.new,
        };
      case "bounce":
        return {
          old: chartData?.bounceRateActivity.old,
          new: chartData?.bounceRateActivity.new,
        };
      case "session-duration":
        return {
          old: chartData?.sessionsDurationActivity.old,
          new: chartData?.sessionsDurationActivity.new,
        };
      case "user":
      default:
        return {
          old: chartData?.userActivity.old,
          new: chartData?.userActivity.new,
        };
    }
  };
  const dataWeeklySale = {
    labels: chartData?.weekly,
    datasets: [
      {
        label: "Sales",
        data: chartData?.weeklySales,
        borderWidth: 2,
        borderColor: "orange",
        backgroundColor: "rgba(255, 165, 0, 0.5)",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "orange",
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderWidth: 2,
        fill: true,
      },
    ],
  };
  const dataSaleOfYear = {
    labels: chartData?.months,
    datasets: [
      {
        label: "Sales Year",
        data: chartData?.sales,
        borderWidth: 2,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "red",
        pointBorderWidth: 2,
        pointStyle: "circle",
        pointRadius: 5,
        fill: false,
        tension: 0.4,
      },
    ],
  };
  const dataCurrentUsers = {
    labels: chartData?.currentUserPerMin,
    datasets: [
      {
        label: "Subscribers",
        data: chartData?.viewPerMin,
        backgroundColor: "red",
        barThickness: 15,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };
  const optionsClear = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
      },
    },
    maintainAspectRatio: false,
  };

  const dataSource = [
    {
      key: "1",
      no: "1",
      thumbnail: "",
      title: "Course Title Here",
      purchases: 70,
      comments: 1150,
      views: 1850,
    },
    {
      key: "2",
      no: "2",
      thumbnail: "",
      title: "Course Title Here",
      purchases: 86,
      comments: 2150,
      views: 6850,
    },
  ];

  const columns = [
    {
      title: "Item No.",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: () => (
        <Image width={150} src={thumbnail} style={{ borderRadius: "5px" }} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Purchases",
      dataIndex: "purchases",
      key: "purchases",
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "comments",
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
    },
  ];

  useEffect(() => {
    updateDataUserActivity(activeTab);
  }, [activeTab, chartData]);

  useEffect(() => {
    if (chartDataStatus === "idle") {
      dispatch(fetchAnalyticsData());
    }
  }, [chartDataStatus, dispatch]);
  return (
    <div className={`analyics ${isShowAll ? "" : "active"}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="statement_title">
              <UilAnalysis className="analyics_icon" /> Analyics
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-sm-6">
            <div className="analyics_card card_mini">
              <div className="card_body">
                <h2>839</h2>
                <p>Subscribers</p>
                <div className="chart_line1">
                  <Bar data={dataSubscribers} options={options} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6">
            <div className="analyics_card card_mini">
              <div className="card_body">
                <h2>950</h2>
                <p>Weekly Visitors</p>
                <div className="chart_line1">
                  <Line data={dataVisitors} options={options} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6">
            <div className="analyics_card card_mini">
              <div className="card_body">
                <h2>950</h2>
                <p>Weekly Sale</p>
                <div className="chart_line1">
                  <Line data={dataWeeklySale} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="analyics_card">
              <div className="card_header">
                <h2>Sales Of The Year</h2>
              </div>
              <div className="card_body card_default">
                <div className="chart_line2">
                  <Line data={dataSaleOfYear} options={optionsClear} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="analyics_card">
              <div className="row no-gutters">
                <div className="col-xl-8">
                  <div className="card_header justify-content-between">
                    <h2>User Activity</h2>
                    <div className="tablist">
                      <ul className="nav nav-tabs justify-content-between justify-content-xl-start nav-fill">
                        <li className="nav-item">
                          <button
                            className={`nav-link pb-md-0 ${
                              activeTab === "user" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("user")}
                            role="tab"
                            aria-selected={activeTab === "user"}
                          >
                            <span className="type-name">User</span>
                            <h4 className="views_title d-inline-block mt-2 mr-2 mb-3">
                              5248
                            </h4>
                            <span className="text-success1">
                              5% <FontAwesomeIcon icon={faArrowUp} />
                            </span>
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link pb-md-0 ${
                              activeTab === "session" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("session")}
                            role="tab"
                            aria-selected={activeTab === "session"}
                          >
                            <span className="type-name">Sessions</span>
                            <h4 className="views_title d-inline-block mt-2 mr-2 mb-3">
                              638
                            </h4>
                            <span className="text-success">
                              20% <FontAwesomeIcon icon={faArrowUp} />
                            </span>
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link pb-md-0 ${
                              activeTab === "bounce" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("bounce")}
                            role="tab"
                            aria-selected={activeTab === "bounce"}
                          >
                            <span className="type-name">Bounce Rate</span>
                            <h4 className="views_title d-inline-block mt-2 mr-2 mb-3">
                              36.9%
                            </h4>
                            <span className="text-danger">
                              7% <FontAwesomeIcon icon={faArrowDown} />
                            </span>
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className={`nav-link pb-md-0 ${
                              activeTab === "session-duration" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("session-duration")}
                            role="tab"
                            aria-selected={activeTab === "session-duration"}
                          >
                            <span className="type-name">Session Duration</span>
                            <h4 className="views_title d-inline-block mt-2 mr-2 mb-3">
                              4m 49s
                            </h4>
                            <span className="text-success">
                              15% <FontAwesomeIcon icon={faArrowUp} />
                            </span>
                          </button>
                        </li>
                      </ul>
                      <div className="card_body">
                        <div className="tab-content">
                          <div className="tab-pane fade show active">
                            <div className="chart_line2">
                              <Line
                                data={dataUserActivity}
                                options={optionsClear}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card_footer d-flex flex-wrap bg-white border-top">
                        <h3 className="text-uppercase py-3 ovrvew-1">
                          Audience Overview
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="card_header justify-content-between">
                    <h2 className="m-0">Current Users</h2>
                  </div>
                  <div className="curntusr145">
                    <p className="my-2">Ave Page views per minute</p>
                    <h4>09</h4>
                  </div>
                  <div className="card_body p-5">
                    <div className="chart_line2">
                      <Bar data={dataCurrentUsers} options={optionsClear} />
                    </div>
                  </div>
                  <div className="card_footer d-flex flex-wrap bg-white">
                    <h3 className="text-uppercase py-3 ovrvew-1">
                      Audience Overview
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 analyics_table">
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyics;
