import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Button, Table } from "antd";
import {
    CloudDownloadOutlined,
    DeleteOutlined,
    PrinterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Purchased_Courses_page() {
    const isShowAll = useSelector((state) => state.savedCourse.isShowAll);
    const dataSource = [
        {
            key: "1",
            no: "IT-001",
            title: "Course Title Here",
            vendor: "Zoena Singh",
            date: "25 March 2020",
            delivery: "Download",
            price: "$15",
            category: "Web Development",
            status: "Active",
            action: "",
        },
        {
            key: "2",
            no: "IT-002",
            title: "Course Title Here",
            vendor: "Rock William",
            date: "20 March 2020",
            delivery: "Download",
            price: "$20",
            category: "C++",
            status: "Active",
            action: "",
        },
    ];
    const columns = [
        {
            title: "Item No.",
            dataIndex: "no",
            key: "no",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Vendor",
            dataIndex: "vendor",
            key: "vendor",
            render: (text) => <Link>{text}</Link>,
        },

        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (text) => <Link>{text}</Link>,
        },
        {
            title: "Delivery Type",
            dataIndex: "delivery",
            key: "delivery",
            render: (text) => <b style={{ color: "red" }}>{text}</b>,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Purchase Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (text, record) => (
                <div>
                    <Button
                        icon={<CloudDownloadOutlined />}
                        style={{ marginRight: 8 }}
                    ></Button>

                    <Button
                        icon={<DeleteOutlined />}
                        style={{ marginRight: 8 }}
                        danger
                    />
                    <Button
                        icon={<PrinterOutlined />}
                        style={{ marginRight: 8 }}
                    />
                </div>
            ),
        },
    ];
    return (
        <div className={`purchased_courses_page ${isShowAll ? "active" : ""}`}>
            <div className="purchased_courses_page-hero">
                <h2 className="purchased_courses_page-hero-title">
                    <FontAwesomeIcon icon={faBook} /> Purchased Courses
                </h2>
                <div className="purchased_courses_page-table">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </div>
        </div>
    );
}

export default Purchased_Courses_page;
