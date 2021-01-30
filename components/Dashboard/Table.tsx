import { useState } from 'react'
import Chart from './Chart';
import { TableDropdown, TableHeader } from './typeDefs'


const period = ['All Time', '1 Year', '6 months', '3 months', '1 Month', '1 Week', '1 Day', '8 Hours', '1 Hour', '15 Minutes']

const list = {
  'frax-period' : [...period],
  'frax-category': ['Price', 'Supply', 'Market Cap'],
  'ratio-period': [...period],
  'ratio-category': ['Ratio', 'Total Value'],
  'fxs-period': [...period],
  'fxs-category': ['Price', 'Circulation Supply', 'Circ. Market Cap', 'Supply', 'Market Cap', 'FXS Burned'],
  'total-value': ['Total Value', '% Algorithmic']
}

const Table = ({ table, selected, setSelected }) => {

  const [openDropdown, setOpendropdown] = useState(false)
  const [selectedItem, setSelectedItem] = useState({
    'frax-period': list['frax-period'][0],
    'frax-category': list['frax-category'][0],
    'ratio-period': list['ratio-period'][0],
    'ratio-category': list['ratio-category'][0],
    'fxs-period': list['fxs-period'][0],
    'fxs-category': list['fxs-category'][0],
    'total-value': list['total-value'][0]
  })

  const showOptions = (id: string) => {
    setSelected(id)
    setOpendropdown(!openDropdown)
  }

  const changeSelectedItem = (newSelection: string) => {
    setSelectedItem(prev => {
      return { ...prev, [selected]: newSelection }
    })
  }

  return(
    <div className="w-full md:w-1/2 border-2 border-gray-700">
      <div className="md:flex">
        { table.label && <p className="text-center md:p-2 text-white font-sans md:text-3xl bg-black">{table.label}</p> }
        <div className="w-full">
          <div className="flex">
            {
              table.header.map((item: TableHeader) => {
                return (
                  <div key={item.text} className="flex-1 text-center">
                    <p className="dash-header-top font-poppins antialiased tracking-tight text-sm py-2">{ item.text } </p>
                    <p className="dash-header-bottom font-poppins antialiased tracking-tight text-sm py-1 text-white border-gray-500">{ item.value } </p>
                  </div>
              )})
            }
          </div>
        </div>
      </div>
      <div className="flex justify-end chart">
        {
          table.dropdown.map((item: TableDropdown) => {
            return(
              <div onClick={() => showOptions(item.id)} className=" w-1/3 md:w-1/4 relative mr-5" key={item.id}>
                <div className="mr-3 hover:border-white hover:border-2 my-2 rounded bg-black">
                  <div className="flex justify-between px-2 dropdown rounded hover:shadow-outline">
                    <p className="text-xs text-white md:py-1">{selectedItem[item.id]}</p>
                    <div className="md:pt-1">
                      <svg fill="#FFF" height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 absolute z-10">
                  {
                    (openDropdown && selected === item.id) && <div className="overflow-y-auto rounded-sm right-6 bg-black text-white py-1 dropdown-menu">
                      {
                        list[selected].map((p: string) => {
                          return <p onClick={() => {changeSelectedItem(p)}} key={p} className="text-xs py-2 pl-3 hover:bg-blue-700 hover:text-white">{p}</p>
                        })
                      }
                    </div>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="chart">
        <Chart tableId={table.id} height={ table.id === 1 || table.id === 2 ? 180 : 275 } width={600} data={table.data} stepSize={table.stepSize}/>
      </div>
    </div>
  )
}

export default Table