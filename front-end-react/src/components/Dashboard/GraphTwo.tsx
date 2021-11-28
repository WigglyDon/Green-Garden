import React from "react";
import "../Dashboard/GraphOne.scss";
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
import { AnyRecord } from "dns";
import { graphDataParser } from "../helpers/graphParser";

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
  const labels = graphDataParser(state, "name");

  const data = {
    labels,
    datasets: [
      //orangy color   // backgroundColor: 'rgba(224, 141, 121, 0.2)',
      // borderColor: 'rgba(224, 141, 121, 1)',
      {
        label: "Seed Spacing",
        data: graphDataParser(state, "spread"),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Water amount",
        data: graphDataParser(state, "water_amount"),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Sun Level",
        data: graphDataParser(state, "sun_level"),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Average Vegetable Height",
        data: graphDataParser(state, "height"),
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Vegetable Care",
      },
    },
  };

  return <Bar className="GraphTwo" options={options} data={data} />;
}
