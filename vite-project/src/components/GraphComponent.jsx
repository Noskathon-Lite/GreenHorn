import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

export default function GraphComponent({ data, type, title, labelColor}){

  const graphTypes = {
    bar: Bar,
    line: Line,
    pie: Pie
  }

  const Chart = graphTypes[type] || Bar;

  return (
    <div>
      <Chart 
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins:{
            legend: {display: false, position: "top"},
            title: {display:true, text:title, color: labelColor, font: { size: 20}},
          },
          scales: {
            x: {
              grid: {
                display: false,  // Disable x-axis grid
              },
              ticks: {
                color: labelColor,  // White color for x-axis ticks
              },
            },
            y: {
              grid: {
                display: false,  // Disable y-axis grid
              },
              ticks: {
                color: labelColor,  // White color for y-axis ticks
              },
            }}
        }}
      />
    </div>
  );
}