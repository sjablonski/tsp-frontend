import React from 'react';
import Chart from 'react-apexcharts';

class BarChart extends React.Component {
  state = {
    options: {
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter(val) {
          return `${val} zł`;
        },
        offsetY: -40,
        style: {
          fontSize: '16px',
          colors: ['#3498D8'],
        },
      },
      fill: {
        colors: [`${({ theme }) => theme.gray}`],
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: ['Październik 2019', 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
      title: {
        text: 'Rachunki z ostatnich 12-miesięcy',
        floating: true,
        align: 'center',
        style: {
          colors: [`${({ theme }) => theme.gray}`],
        },
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  render() {
    const { options, series } = this.state;
    return <Chart options={options} series={series} type="bar" height="350" />;
  }
}

export default BarChart;
