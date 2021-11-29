import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { graphDataParser } from "../helpers/graphParser";
import { graphaDataSculptor } from "../helpers/graphDataSculptor";
import { sortObject } from "../helpers/sortObject";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function TagsBarGraph(props: any) {
  const { state } = props;
  const sortedArray = sortObject(
    graphaDataSculptor(graphDataParser(state, "tags"))
  );

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Most Common Tags",
        font: {
          size: 20,
        },
      },
    },
  };

  const labels = sortedArray.map((keys) => keys[0]).reverse();

  const data = {
    labels,
    datasets: [
      {
        label: "Total Number of Tags",
        data: sortedArray.map((values) => values[1]).reverse(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
