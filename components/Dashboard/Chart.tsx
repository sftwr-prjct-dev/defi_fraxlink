import { Doughnut, Line, defaults } from 'react-chartjs-2'

const Chart = ({ width, height, tableId }) => {

  return tableId !== 4 ? (
    <Line 
      height={height}
      width={width}  
      data={{
        datasets:[{
          label: '',
          data: [10, 20, 30, 40, 50, 60, 70]
        }]
      }}
      options= {{
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'month'
                }
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
        datasets:[{
          label: '',
          data: [10, 20, 30, 40, 50, 60, 70]
        }]
      }}
      options= {{
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'month'
                }
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
      }
    }
    />
  )
}

export default Chart
