// components/My_Certificates.js
import React, { useEffect, useState } from "react";
import "./index.scss";
import { createGlobalStyle } from "styled-components";
import { UilAward, UilTrashAlt } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchCertificates,
  fetchUpdateMyCertificate,
} from "../../redux/features/myCertificateSlice";
import { toast } from "react-toastify";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #f7f7f7; 
    margin: 0;
    padding: 0;
    color: #333; 
  }
`;

function My_Certificates() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mycertificate = useSelector((state) => state.certificate.mycertificate);
  const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
  const [loading, setLoading] = useState(true);
  const account = useSelector((state) => state.user.account);
  const userId = account.id || "";
  
  useEffect(() => {
    dispatch(fetchCertificates(userId)).then(() => setLoading(false));
  }, [dispatch, userId]);

  const handleUpdate = (id) => {
    const UpdateMyCertificate = { statusCertificate: false };
    dispatch(fetchUpdateMyCertificate({ id, UpdateMyCertificate, userId }));
    toast.success("Deleted successfully!");
  };

  if (loading) {
    return (
      <div
        className="col-md-12 d-flex justify-content-center align-items-center"
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f7f7f7",
          position: "absolute",
          zIndex: "3000",
        }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`wrapper-my-certificates ${isShowAll ? "active" : ""}`}>
      <GlobalStyles />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="my-certificates-title">
              <i className="uil uil-award-my-certificates"></i>{" "}
              <UilAward className="award-icon" size="20" /> My Certificates
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mt-10">
              <div className="card-dash-my-cerificate">
                <div className="card-dash-left-my-cerificate">
                  <i className="uil uil-award-new-certificate"></i>
                  <UilAward size="32" color="#686f7a" />
                  <h1>Jump Into New Certificate</h1>
                </div>
                <div className="card-dash-right-my-cerificate">
                  <button
                    className="create-btn-dash-my-cerificate"
                    onClick={() => navigate("/secondLayout/certification_center")}
                  >
                    New Certificate
                  </button>
                </div>
              </div>

              <div className="table-my-cerificate">
                <div className="table-responsive-my-cerificate">
                  <table
                    className="table ucp-table-my-cerificate"
                    id="content-table"
                  >
                    <thead className="thead-s">
                      <tr>
                        <th className="text-left" scope="col">
                          Item No.
                        </th>
                        <th scope="col">Title</th>
                        <th className="text-left" scope="col">
                          Marks
                        </th>
                        <th className="text-left" scope="col">
                          Out Of
                        </th>
                        <th className="text-left" scope="col">
                          Upload Date
                        </th>
                        <th className="text-left" scope="col">
                          Certificate
                        </th>
                        <th className="text-left" scope="col">
                          Controls
                        </th>
                      </tr>
                    </thead>
                    {mycertificate
                      .filter(
                        (my_certificate) =>
                          my_certificate.statusCertificate &&
                          my_certificate.userId === userId
                      )
                      .map((my_certificate, index) => (
                        <tbody key={my_certificate.id}>
                          <tr>
                            <td className="text-center">{index + 1}</td>
                            <td className="cell-ta">{my_certificate.title}</td>
                            <td className="text-center">
                              {my_certificate.marks}
                            </td>
                            <td className="text-center">
                              {my_certificate.outof}
                            </td>
                            <td className="text-center">
                              {my_certificate.date}
                            </td>
                            <td className="text-center text-center-hover">
                              <Link to="/certificate">View</Link>
                            </td>
                            <td className="text-center">
                              <a
                                href="#"
                                title="Delete"
                                className="gray-s"
                                onClick={() => handleUpdate(my_certificate.id)}
                              >
                                <UilTrashAlt size="18" color="#686f7a" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default My_Certificates;
