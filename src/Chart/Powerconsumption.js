 


import React from "react";
import Chart from "react-apexcharts";


const data = {
    series: [
        {
            name: "Today",
            // data: [60, 63,54,51,53,71, 51, 49, 62, 69],
            data: [11.7, 11.8, 12, 11.7, 11.5, 12],
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
            text: "Power Consumption",
            align: "left",
            style: {
                fontSize: '12px',
                fontWeight: '500 bold',
                fontFace:'sans-serif',
                top:'5%'
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
                "6AM",
                "9AM",
                "12PM",
                "3PM",
                "6PM",
                "9PM",
            ],
        },
    },
};
function ApexAreaChart() {
    return <>

        <Chart
            options={data.options}
            series={data.series}
            type="area"
            height={200}
            width={300}

        />

    </>;
}
export default ApexAreaChart;


