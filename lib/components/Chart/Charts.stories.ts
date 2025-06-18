import type { Meta, StoryObj } from '@storybook/react';

import { Charts } from '../../main';

const meta: Meta<typeof Charts> = {
  title: 'Components/Charts',
  component: Charts,
};

export default meta;

type Story = StoryObj<typeof Charts>;

export const Bar: Story = {
  args: {
    chartType: 'bar',
    chartTitle: 'Bar Chart Example',
    chartLegend: 'top',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 20, 30, 40, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    className: 'chart',
  },
};

export const Pie: Story = {
  args: {
    chartType: 'pie',
    chartTitle: 'Pie Chart Example',
    chartLegend: 'bottom',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [300, 50, 100],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
  },
};

export const Line: Story = {
  args: {
    chartType: 'line',
    chartTitle: 'Line Chart Example',
    chartLegend: 'right',
    data: {  
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56],
          fill: false,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    },
}
};