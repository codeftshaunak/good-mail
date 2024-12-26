import { ApexOptions } from "apexcharts";
import { ArrowUp } from 'lucide-react';
import React from "react";
import ReactApexChart from "react-apexcharts";


const ChartOne: React.FC = () => {
  const series = [
    {
      name: "Due Amount",
      data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62],
    },
  ];

  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#5750F1", "#0ABEF9"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
    },

    markers: {
      size: 0,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function (e) {
            return "";
          },
        },
      },
      marker: {
        show: !1,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-5">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Main Metrics
          </h4>
          <p className="mt-4 mb-4 font-semibold opacity-70 text-lg">Email revenue</p>
          <p className="text-3xl font-semibold text-black dark:text-white">$15.3K</p>
        </div>
        <div>
          <div className="flex gap-1 bg-green-200 px-2 py-1 rounded-md items-center ml-10">
            <ArrowUp color="green" size={20} />
            <p className="text-green-700">12%</p>
          </div>
          <p className="text-xl mt-2">vs last month</p>
        </div>
      </div>
      <div>
        <div className="-ml-4 -mr-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={150}
          />
        </div>
      </div>
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mt-4 mb-4 font-semibold opacity-70 text-lg">Growth rate</p>
          <p className="text-3xl font-semibold text-black dark:text-white">3.7%</p>
        </div>
        <div>
          <div className="flex gap-1 bg-green-200 px-2 py-1 rounded-md ml-10">
            <ArrowUp color="green" size={20} />
            <p className="text-green-700">5.4%</p>
          </div>
          <p className="text-xl mt-2">vs last month</p>
        </div>
      </div>
      <div>
        <div className="-ml-4 -mr-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
