import React from "react";
import "./index.scss";
import { createGlobalStyle } from "styled-components";
import { UilAward, UilTrashAlt} from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const GlobalStyles = createGlobalStyle`

  body {
    background-color: #f7f7f7; 
    margin: 0;
    padding: 0;
    color: #333; 
  }
`;
const My_Certificates = () => {
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  return (
    <div className={`wrapper-my-certificates ${isShowAll ? "active" : ""}`}>
      <GlobalStyles />
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="my-certificates-title">
              <i class="uil uil-award-my-certificates"></i>{" "}
              <UilAward className="award-icon" size="20" /> My Certificates
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="mt-10">
              <div class="card-dash-my-cerificate">
                <div class="card-dash-left-my-cerificate">
                  <i class="uil uil-award-new-certificate"></i>
                  <UilAward size="32" color="#686f7a" />
                  <h1>Jump Into New Certificate</h1>
                </div>
                <div class="card-dash-right-my-cerificate">
                  <Link to="/secondLayout/certification_center">
                  <button
                    class="create-btn-dash-my-cerificate"
                    onclick="window.location.href = 'certification_center.html';"
                  >
                    New Certificate
                  </button>
                  </Link>
                </div>
              </div>
              <div class="table-my-cerificate">
                <div class="table-responsive-my-cerificate">
                  <table
                    class="table ucp-table-my-cerificate"
                    id="content-table"
                  >
                    <thead class="thead-s">
                      <tr>
                        <th class="text-left" scope="col">
                          Item No.
                        </th>
                        <th scope="col">Title</th>
                        <th class="text-left" scope="col">
                          Marks
                        </th>
                        <th class="text-left" scope="col">
                          Out Of
                        </th>
                        <th class="text-left" scope="col">
                          Upload Date
                        </th>
                        <th class="text-left" scope="col">
                          Certificate
                        </th>
                        <th class="text-left" scope="col">
                          Controls
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">1</td>
                        <td class="cell-ta">WordPress Certificate</td>
                        <td class="text-center">15</td>
                        <td class="text-center">20</td>
                        <td class="text-center">6 April 2019</td>
                        <td class="text-center text-center-hover">
                          <Link to="/certificate">
                            View
                          </Link>
                        </td>
                        <td class="text-center">
                          <a href="#" title="Delete" class="gray-s">
                            <UilTrashAlt size="18" color="#686f7a" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">2</td>
                        <td class="cell-ta">WordPress Pro Certificate</td>
                        <td class="text-center">14</td>
                        <td class="text-center">20</td>
                        <td class="text-center">4 April 2019</td>
                        <td class="text-center text-center-hover">
                          <Link to="/certificate">
                            View
                          </Link>
                        </td>
                        <td class="text-center">
                          <a href="#" title="Delete" class="gray-s">
                            <UilTrashAlt size="18" color="#686f7a" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">3</td>
                        <td class="cell-ta">HTML CSS Certificate</td>
                        <td class="text-center">18</td>
                        <td class="text-center">20</td>
                        <td class="text-center">3 April 2019</td>
                        <td class="text-center text-center-hover">
                          <Link to="/certificate">
                            View
                          </Link>
                        </td>
                        <td class="text-center">
                          <a href="#" title="Delete" class="gray-s">
                            <UilTrashAlt size="18" color="#686f7a" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_Certificates;
