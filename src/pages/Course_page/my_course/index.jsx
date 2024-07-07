import React from "react";
import "./index.scss";
import { Button, Table } from "antd";

import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
function My_course() {
    const dataSource = [
        {
            key: "1",
            no: "IT-001",
            title: "Course Title Here",
            date: "06 April 2020 | 08:31",
            sales: 15,
            parts: 5,
            category: "Web Development",
            status: "Active",
            action: "",
        },
        {
            key: "2",
            no: "IT-002",
            title: "Course Title Here",
            date: "05 April 2020 | 05:15",
            sales: 14,
            parts: 5,
            category: "Graphic Design",
            status: "Active",
            action: "",
        },
        {
            key: "3",
            no: "IT-003",
            title: "Course Title",
            date: "03 April 2020 | 01:30",
            sales: 12,
            parts: 6,
            category: "Bootstrap",
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
            title: "Publish Date",
            dataIndex: "date",
            key: "date",
        },

        {
            title: "Sales",
            dataIndex: "sales",
            key: "sales",
        },
        {
            title: "Parts",
            dataIndex: "parts",
            key: "parts",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (text) => <Link>{text}</Link>,
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
        <div className="my_course">
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
}

export default My_course;
