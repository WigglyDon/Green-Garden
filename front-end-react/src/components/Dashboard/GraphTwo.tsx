import React from 'react';
import '../Dashboard/GraphOne.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { AnyRecord } from 'dns';
import { graphDataParser } from '../helpers/graphParser'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphTwo(props: any) {
  const { state } = props;
  const labels = graphDataParser(state, 'name')

  const data = {
    labels,
    datasets: [
      {
        label: 'Height',
        data: graphDataParser(state, 'height'),
        backgroundColor: 'orange',
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      // legend: {
      //   position: 'top' as const,
      // },
      title: {
        display: false,
        text: 'Vegetables Height',
      },
    },
  };

  return <Bar className="GraphTwo" options={options} data={data} />;
}
