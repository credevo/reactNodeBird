import { Form, InputNumber, Input, DatePicker } from 'antd';
import React, { useState } from 'react';

const EditableCell = ({
    editable,
    dataIndex,
    title,
    dataType,
    record,
    index,
    children,
    ...restProps
}) => {
    const childNode = children;

    editable > code - select;
    editable > date - datepicker;
    editable > text - input;
    editable > number - inputNumber;

    editable > code -  covert codeValue
    editable > date -  table  date 
    editable > text - input;
    editable > number - inputNumber;

    return (
        <td {...restProps}>
            {
                switch(dataType){
                    case date :{
                        <Form.Item
                            name={dataIndex}
                            style={{
                                margin: 0,
                            }}
                            defaultValue={{}}
                            rules={[
                                {
                                    required: true,
                                    message: `Please Input ${title}!`,
                                },
                            ]}
                        >
                            {inputNode}
                        </Form.Item>
                    }
                    break;
                    case : break;
                    default : break;
                }
        
            }
        </td>
    );
};
export default EditableCell;