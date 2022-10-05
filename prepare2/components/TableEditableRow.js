import { Form, InputNumber, Popconfirm, Table, Typography } from 'antd';
import React, { useState } from 'react';
import EditableCell from './EditableCell';

const originData = [];

for (let i = 0; i < 5; i++) {
  originData.push({
    key: i.toString(),
    phaseCd: '10000',
    stateDate: '2020-01-01',
    endDate: '2020-01-10',
    tat: '',
  });
}

const TableEditableRow = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isPM = true;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  const codeData = [
    { codeId: '10000', codeValue: '일만' },
    { codeId: '20000', codeValue: '이만' },
    { codeId: '30000', codeValue: '삼만' },
  ];
  const columns = [
    {
      title: 'Phase',
      dataIndex: 'phaseCd',
      width: '20%',
      editable: !isPM ? true : false,
      dataType: 'code',
      code: codeData,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      width: '25%',
      dataType: 'date',
      editable: isPM ? true : false,
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      width: '25%',
      dataType: 'date',
      editable: isPM ? true : false,
    },
    {
      title: 'TAT',
      dataIndex: 'tat',
      editable: !isPM ? true : false,
      dataType: 'text',
      render: (_, record) => {
        console.log('record', record);
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      //  cell component의 props 값 셋팅
      onCell: (record) => ({
        record: record,
        index: col.index,
        dataType: col.dataType,
        editable: col.editable === true ? true : false,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={false}
      />
    </Form>
  );
};
export default TableEditableRow;

// {
//     title: 'operation',
//     dataIndex: 'operation',
//     render: (_, record) => {
//         const editable = isEditing(record);
//         return editable ? (
//             <span>
//                 <Typography.Link
//                     onClick={() => save(record.key)}
//                     style={{
//                         marginRight: 8,
//                     }}
//                 >
//                     Save
//                 </Typography.Link>
//                 <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
//                     <a>Cancel</a>
//                 </Popconfirm>
//             </span>
//         ) : (
//             <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
//                 Edit
//             </Typography.Link>
//         );
//     },
// },
