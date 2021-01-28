import { Doughnut, Line } from 'react-chartjs-2'

const Chart = ({ width, height, tableId, data, stepSize }) => {
 
  return tableId !== 4 ? (
    <Line 
      height={height}
      width={width}  
      data={{
        datasets: data
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
  ) : (
    <Doughnut 
      height={height}
      width={width}  
      data={{
        datasets:[
          {
            // label: 'Algorithmic',
            data: data,
            backgroundColor: [
              'blue',
              'orange'
            ],
          }
        ],
        labels: ['Algorithmic', 'USDC']
      }}
      options= {
        {
          tooltips: {
            mode: 'nearest'
          },
          layout: {
            padding: { bottom: 8 }
          },
          legend: {
            labels: {
              position: 'left',
              align: 'start',
              fontColor: '#FFF'
            }
          }
        }
      }
    />
  )
}

export default Chart
