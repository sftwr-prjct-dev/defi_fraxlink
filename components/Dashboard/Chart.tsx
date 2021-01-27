import { Doughnut, defaults } from 'react-chartjs-2'
import LineComponent from './LineComponent'




const Chart = ({ width, height, tableId, data, stepSize }) => {
 
  return tableId !== 4 ? (
    <LineComponent width={width} height={height} datasets={data} stepSize={stepSize}/>
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
