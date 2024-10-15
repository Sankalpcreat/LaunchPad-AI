
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CustomLineChart = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <LineChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default CustomLineChart;
