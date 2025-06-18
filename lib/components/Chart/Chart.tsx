import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  type ChartData,
  PieController,
  LineController,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { useEffect, useRef } from 'react';

ChartJS.register(
  BarController,
  PieController,
  LineController,
  ArcElement,
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend
);

interface ChartsProps {
  chartTitle: string;
  data?: ChartData;
  chartType: 'bar' | 'line' | 'pie';
  chartLegend: 'left' | 'top' | 'right' | 'bottom' | 'center' | 'chartArea';
  className?: string;
}

export const Charts = ({
  chartTitle,
  data,
  chartType,
  chartLegend,
  className,
}: ChartsProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const myChart = new ChartJS(canvasRef.current, {
        type: chartType || 'bar',
        data: data || { datasets: [], labels: [] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: chartLegend,
            },
            title: {
              display: true,
              text: chartTitle,
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [chartTitle, chartType, data, chartLegend]);

  return <div style={{width:"100%",height:"100%"}}><canvas  className={className} ref={canvasRef}></canvas></div>;
};
