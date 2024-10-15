import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const CustomPieChart = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5574'];
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
        outerRadius={80}
        fill="#8884d8"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart