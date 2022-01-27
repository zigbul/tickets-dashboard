import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dataSorter from '../utils/dataSorter';

const Chart = ({ data }) => {
  console.log(dataSorter(data));

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={dataSorter(data)}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="high" stackId="a" fill="#EB5757" />
        <Bar dataKey="normal" stackId="a" fill="#29CC97" />
        <Bar dataKey="low" stackId="a" fill="#F2C94C" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
