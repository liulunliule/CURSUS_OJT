import React from "react";
import "./index.scss";
import { Button, Collapse, DatePicker, Input, Select, Table } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Discounts() {
    const dataSource = [
        {
            key: "1",
            no: "IT-001",
            course: "Course Title Here",
            startdate: "02 November 2019",
            enddate: "19 November 2019",

            discount: "20%",

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
            title: "Course",
            dataIndex: "course",
            key: "course",
        },
        {
            title: "Start Date",
            dataIndex: "startdate",
            key: "startdate",
        },
        {
            title: "End Date",
            dataIndex: "enddate",
            key: "enddate",
        },
        {
            title: "Discount",
            dataIndex: "discount",
            key: "discount",
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
        <div className="discounts">
            <Collapse
                className="discounts_collapse"
                items={[
                    {
                        key: "1",
                        label: (
                            <h4 className="discounts_collapse_title">
                                New Discount
                            </h4>
                        ),
                        children: (
                            <div className="discounts__content">
                                <form action="" className="discount-form">
                                    <div className="discount_input">
                                        <label htmlFor="">Course*</label>
                                        <Select
                                            mode="tags"
                                            style={{
                                                width: "100%",
                                            }}
                                            placeholder="Select Course"
                                            options={[
                                                {
                                                    value: "1",
                                                    label: "Course Title Here",
                                                },
                                                {
                                                    value: "2",
                                                    label: "Course Title Here",
                                                },
                                                {
                                                    value: "3",
                                                    label: "Course Title Here",
                                                },
                                                {
                                                    value: "4",
                                                    label: "Course Title Here",
                                                },
                                                {
                                                    value: "5",
                                                    label: "Course Title Here",
                                                },
                                                {
                                                    value: "6",
                                                    label: "Course Title Here",
                                                },
                                                {
                                                    value: "7",
                                                    label: "Course Title Here",
                                                },
                                                {
                                                    value: "8",
                                                    label: "Course Title Here",
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className="discount_input">
                                        <label htmlFor="">
                                            Discount Amount
                                        </label>
                                        <Input
                                            placeholder="Percent (eg. 20 for 20%)"
                                            type="number"
                                        />
                                    </div>
                                    <div className="discount_input">
                                        <label htmlFor="">Start Date</label>
                                        <DatePicker
                                            style={{
                                                width: "100%",
                                            }}
                                        />
                                    </div>
                                    <div className="discount_input">
                                        <label htmlFor="">End Date</label>
                                        <DatePicker
                                            style={{
                                                width: "100%",
                                            }}
                                        />
                                    </div>
                                </form>

                                <button className="discount_btn">
                                    Save Changes
                                </button>
                            </div>
                        ),
                    },
                ]}
            />

            <Table
                className="discounts_table"
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
}

export default Discounts;
