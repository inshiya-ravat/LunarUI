import { ThemeProvider } from '@emotion/react';
import { Camera, Charts } from '../lib/main';
import './App.css';
import type { ChartData } from 'chart.js';

function App() {
  const theme = {
    Colors: {
      primary: 'skyblue',
    },
  };
  const chartData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30, 40, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Color for 'January'
          'rgba(54, 162, 235, 0.2)', // Color for 'February'
          'rgba(255, 206, 86, 0.2)', // Color for 'March'
          'rgba(75, 192, 192, 0.2)', // Color for 'April'
          'rgba(153, 102, 255, 0.2)', // Color for 'May'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Border color for 'January'
          'rgba(54, 162, 235, 1)', // Border color for 'February'
          'rgba(255, 206, 86, 1)', // Border color for 'March'
          'rgba(75, 192, 192, 1)', // Border color for 'April'
          'rgba(153, 102, 255, 1)', // Border color for 'May'
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Camera
          action={() => alert('captured image')}
          className="camera-container"
        />
        <Charts
          className="chart"
          chartType="line"
          chartTitle="Sample Chart"
          chartLegend="bottom"
          data={chartData}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
