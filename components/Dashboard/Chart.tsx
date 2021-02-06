import { Doughnut, Line } from 'react-chartjs-2';

const Chart = ({ width, height, tableId, data, stepSize }) => {
  return tableId !== 4 ? (
    <Line
      height={height}
      width={width}
      data={{
        datasets: [
          {
            fill: false,
            borderColor: '#4CBFC0',
            backgroundColor: '#4CBFC0',
            pointRadius: 0,
            pointHitRadius: 6,
            pointHoverRadius: 4,
            ...data[0],
          },
        ],
      }}
      options={{
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'month',
                stepSize: stepSize,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        tooltips: {
          mode: 'nearest',
          callbacks: {
            title: function (tooltipItem, data) {
              return '$' + Number(tooltipItem[0].yLabel);
            },
            label: function (tooltipItem) {
              console.log(tooltipItem);
              return tooltipItem.xLabel;
            },
          },
          titleFontSize: 16,
          displayColors: false,
        },
        elements: {
          line: {
            tension: 0,
          },
        },
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
      }}
    />
  ) : (
    <Doughnut
      height={height}
      width={width}
      data={{
        datasets: [
          {
            // label: 'Algorithmic',
            data: data,
            backgroundColor: ['blue', '#4CBFC0'],
          },
        ],
        labels: ['Algorithmic', 'USDC'],
      }}
      options={{
        tooltips: {
          mode: 'nearest',
        },
        layout: {
          padding: { bottom: 8 },
        },
        legend: {
          labels: {
            position: 'left',
            align: 'start',
            fontColor: '#FFF',
          },
        },
      }}
    />
  );
};

export default Chart;
