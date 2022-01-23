import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    high: 20,
    normal: 2,
    low: 4,
    amt: 2400,
  },
  {
    name: 'Page B',
    high: 30,
    normal: 13,
    low: 44,
    amt: 2210,
  },
  {
    name: 'Page C',
    high: 20,
    normal: 98,
    low: 4,
    amt: 2290,
  },
  {
    name: 'Page D',
    high: 27,
    normal: 39,
    low: 34,
    amt: 2000,
  },
  {
    name: 'Page E',
    high: 18,
    normal: 48,
    low: 34,
    amt: 2181,
  },
  {
    name: 'Page F',
    high: 23,
    normal: 38,
    low: 24,
    amt: 2500,
  },
  {
    name: 'Page G',
    high: 34,
    normal: 43,
    low: 14,
    amt: 2100,
  },
];

const Chart = () => {

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={data}
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
