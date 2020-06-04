import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  // state = {
  //   dailyData: {},
  // };
  //syntax below have setter method on the second argument, and we don't have to worry about this.setState
  const [dailyData, setDailydata] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailydata(await fetchDailyData());
    };
    console.log("This one" + dailyData);
    fetchAPI();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(225,0,0,0.5",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div classname={styles.container}>
      <h1>Chart</h1>
      {lineChart}
    </div>
  );
};

export default Chart;

/*
NOTES
We cannot use async keyword directly into useEffect
https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435
*/
