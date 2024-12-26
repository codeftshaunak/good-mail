"use client";
import ChartOne from "@/components/Charts/ChartOne";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import { DashboardPerformanceNotify, DashboardTopBar } from "../TopBar/SetUpCamp";

const GoodMail: React.FC = () => {
  return (
    <>
      <DashboardTopBar />
      <DashboardPerformanceNotify />
      <DataStatsOne />

      <div className="mt-4 grid grid-cols-12 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        <div className="col-span-12">
          <TableOne />
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default GoodMail;
