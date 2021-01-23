import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import Table from './Table'

const chart1 = {
  id: 1,
  label: 'FRAX', 
  header: [
    {
      text: 'PRICE',
      value: '$1.000'
    },
    {
      text: 'SUPPLY',
      value: '123.66M'
    },
    {
      text: 'MARKET CAP',
      value: '123.66M'
    }
  ],
  dropdown: [
    {
      id: 'frax-period'
    },
    {
      id: 'frax-category'
    }
  ]
}

const chart2 = {
  id: 2,
  label: '', 
  header: [
    {
      text: 'COLLATERAL RATIO',
      value: '85.50%'
    },
    {
      text: 'GROWTH RATIO',
      value: '17.73%'
    }
  ],
  dropdown: [
    {
      id: 'ratio-period'
    },
    {
      id: 'ratio-category'
    }
  ]
}

const chart3 = {
  id: 3,
  label: 'FXS', 
  header: [
    {
      text: 'ORACLE PRICE',
      value: '$6.615'
    },
    {
      text: 'CIRC. SUPPLY',
      value: '2.398M'
    },
    {
      text: 'CIRC. MARKET CAP',
      value: '$16.396M'
    }
  ],
  dropdown: [
    {
      id: 'fxs-period'
    },
    {
      id: 'fxs-category'
    }
  ]
}

const chart4 = {
  id: 4,
  label: '', 
  header: [
    {
      text: 'TOTAL VALUE',
      value: '$114M'
    }
  ],
  dropdown: [
    {
      id: 'total-value'
    }
  ]
}

const Dashboard = () => {
  const [selected, setSelected] = useState('')
  return (
    <Fragment>
      <div className="md:flex md:flex-wrap">
        <Table table={chart1} selected={selected} setSelected={setSelected} />
        <Table table={chart2} selected={selected} setSelected={setSelected} />
        <Table table={chart3} selected={selected} setSelected={setSelected} />
        <Table table={chart4} selected={selected} setSelected={setSelected} />
      </div>
    </Fragment>  
  )
}

export default Dashboard
