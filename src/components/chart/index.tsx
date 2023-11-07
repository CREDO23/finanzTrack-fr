"use client"
import { Line } from '@ant-design/charts';

export default function Chart() {
  const data = [
    {
        day: "1",
        amount: 0,
        category: ""
      },
      
    {
      day: "2",
      amount: 0,
      category: "Liquid fuel"
    },
    {
      day: "5",
      amount: 54,
      category: "Solid fuel"
    },
    {
      day: "12",
      amount: 27,
      category: "Gas fuel"
    },
    {
      day: "24",
      amount: 68,
      category: "Cement production"
    },
    {
      day: "22",
      amount: 40,
      category: "Gas flarinl"
    },
    {
      day: "18",
      amount: 32,
      category: "Liquid fuel"
    },
    {
      day: "20",
      amount: 54,
      category: "Solid fuel"
    },{
        day: "31",
        amount: 0,
        category: ""
      }]

  const config = {
    data,
    xField: 'day',
    yField: 'amount',
    seriesField: 'category',
  };
  return (
    <div className="w-full">
      <Line {...config} />
    </div>
  );
}
