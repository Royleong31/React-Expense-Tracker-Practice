import ChartBar from "./ChartBar";

import './Chart.css'

const Chart = (props) => {
  console.log('Sum in chart.js');
  console.log(props.dataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={props.sumOfExpenses}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
