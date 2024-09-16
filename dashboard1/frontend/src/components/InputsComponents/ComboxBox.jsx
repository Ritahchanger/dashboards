import React from 'react';
import { Select } from 'antd';

const { Option } = Select; 

const ComboxBox = ({ options, handleChange }) => {
  return (
    <Select
      placeholder="Select a fruit or type to search"
      onChange={handleChange}
      showSearch
      allowClear
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default ComboxBox;
