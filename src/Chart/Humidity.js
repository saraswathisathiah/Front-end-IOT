


import React from "react";
import Chart from "react-apexcharts";


const data = {
    series: [
        {
            name: "Today",
            // data: [60, 63,54,51,53,71, 51, 49, 62, 69],
            data: [0,20,40,,60,80,100],
        },
    ],
    options: {
        chart: {
            height: 40,

            type: "smooth",
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        title: {
            text: "Humidity",
            align: "left",
            style: {
                fontSize: '12px',
                fontWeight: '500 bold',
                fontFace: 'sans-serif',
                top: '5%'
            }
        },
        // grid: {
        //   row: {
        //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        //     opacity: 0.5,
        //   },
        // },
        xaxis: {
            categories: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
        },
    },
};
function HumidityAreaChart() {
    return <>

        <Chart
            options={data.options}
            series={data.series}
            type="area"
            height={200}
            width={650}

        />

    </>;
}
export default HumidityAreaChart;


