
import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const CustomRadarChart = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    subject: label,
    A: data.values[index],
  }));

  return (
    <RadarChart outerRadius={90} width={400} height={400} data={chartData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar name="Data" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Tooltip />
    </RadarChart>
  );
};

export default CustomRadarChart;
