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


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};



const dataParser = (state: any, target:any) => {
  return state.map((name: any) => name[target]);
}



export default function GraphTwo(props: any) {
  const { state } = props;
  console.log("GRAPH STATE", state);
  //console.log("PARSER", dataParser(state));

  const labels = dataParser(state, 'name')


  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset',
        data: dataParser(state, 'height'),
        backgroundColor: 'orange',
      }
    ],
  };

  return <Bar className="GraphTwo" options={options} data={data} />;
}
