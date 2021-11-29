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

export default function GrowingDaysGraph(props: any) {
  const { state } = props;
  const labels = graphDataParser(state, "name");

  const data = {
    labels,
    datasets: [
      //orangy color   // backgroundColor: 'rgba(224, 141, 121, 0.2)',
      // borderColor: 'rgba(224, 141, 121, 1)',
      {
        label: "Growing Days",
        data: graphDataParser(state, "growing_days"),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
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
        text: "Growing Days",
        font: {
          size: 20,
        },
      },
      
    },
  };

  return <Bar className="GraphTwo" options={options} data={data} />;
}
