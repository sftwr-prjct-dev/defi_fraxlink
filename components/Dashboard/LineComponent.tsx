import { Line } from 'react-chartjs-2'

const LineComponent = ({ datasets, width, height, stepSize }) => {

  return (
    <Line 
      height={height}
      width={width}  
      data={{
        datasets: datasets
      }}
      options= {{
        scales: {
            xAxes: [{
              type: 'time',
              time: {
                unit: 'month',
                stepSize: stepSize
              },
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        },
        tooltips: {
          mode: 'nearest'
        },
        elements: {
          line: {
              tension: 0
          }
        },
        legend: {
          display: false
        },
      }
    }
    />
  )
}

export default LineComponent
