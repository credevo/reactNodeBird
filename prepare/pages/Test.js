import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Table } from "antd";
import Comp from "./Comp";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  Table.EXPAND_COLUMN,
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  Table.SELECTION_COLUMN,
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];

const Test = () => (
  <Table
    columns={columns}
    rowSelection={{}}
    expandable={{
      expandedRowRender: Comp,
    }}
    dataSource={data}
  />
);

export default Test;
