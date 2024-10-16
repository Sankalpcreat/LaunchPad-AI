import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define the structure of the data prop
interface ChartData {
  labels: string[];
  values: number[];
}

interface CustomLineChartProps {
  data: ChartData;
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none', color: '#fff' }} />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="url(#colorLine)" strokeWidth={2} dot={false} />
        <defs>
          <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
