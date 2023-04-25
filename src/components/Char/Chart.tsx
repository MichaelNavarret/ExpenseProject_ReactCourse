import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
import DataPoint from "../../types/TDataPoints";

type ChartProps = {
  dataPoints: DataPoint[];
};

const Chart = (props: ChartProps) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label} // label is unique
          value={dataPoint.value}
          maxValue={totalMaximum} 
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
