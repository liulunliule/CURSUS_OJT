import React from "react";
import "./index.scss";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
function Upcoming_course() {
    const dataSource = [
        {
            key: "1",
            no: "01",
            title: "Course Title Here",
            price: "$15",
            date: "9 April 2020",
            thumbnail: "View",
            category: "Web Development",
            status: "Pending",
            action: "",
        },
        {
            key: "1",
            no: "01",
            title: "Course Title Here",
            price: "$15",
            date: "9 April 2020",
            thumbnail: "View",
            category: "Web Development",
            status: "Pending",
            action: "",
        },
        {
            key: "1",
            no: "01",
            title: "Course Title Here",
            price: "$15",
            date: "9 April 2020",
            thumbnail: "View",
            category: "Web Development",
            status: "Pending",
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
            title: "Thumbnail",
            dataIndex: "thumbnail",
            key: "thumbnail",
            render: (text) => <Link>{text}</Link>,
        },

        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (text) => <Link>{text}</Link>,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (text) => <b style={{ color: "red" }}>{text}</b>,
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (text, record) => (
                <div>
                    <Button
                        icon={<EditOutlined />}
                        style={{ marginRight: 8 }}
                    />
                    <Button icon={<DeleteOutlined />} danger />
                </div>
            ),
        },
    ];
    return (
        <div className="upcoming_course">
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default Upcoming_course;
