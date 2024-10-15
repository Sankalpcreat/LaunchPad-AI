import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, ResponsiveContainer } from 'recharts';

const CustomRadarChart = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    subject: label,
    A: data.values[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={90} data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Data" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CustomRadarChart;
