import { Fragment, useState } from 'react'
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
  ],
  data: [
    {
      fill: false, borderColor: '#FFF',
      data: [{
        t: new Date('January 14 2020'),
        y: 15
        }, {
            t: new Date('January 17, 2020'),
            y: 12
        },
        {
          t: new Date('January 27, 2020'),
          y: 25
      }]
    }
  ],
  stepSize: 6
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
  ],
  data: [
    {
      fill: false, borderColor: '#FFF',
      data: [{
        t: new Date('January 13 2020'),
        y: 5
    }, {
        t: new Date('January 17, 2020'),
        y: 10
    }]
    }
  ],
  stepSize: 4
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
  ],
  data: [
    {
      fill: false, borderColor: '#FFF',
      data: [{
        t: new Date('January 14 2020'),
        y: 20
    }, {
        t: new Date('August 17, 2021'),
        y: 49
    }]
    }
  ],
  stepSize: 3
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
  ],
  data: [10,20]
}

const Dashboard = () => {
  const [selected, setSelected] = useState('')
  return (
    <Fragment>
      <div className="md:flex md:flex-wrap">
        <Table table={chart1} selected={selected} setSelected={setSelected}/>
        <Table table={chart2} selected={selected} setSelected={setSelected}/>
        <Table table={chart3} selected={selected} setSelected={setSelected}/>
        <Table table={chart4} selected={selected} setSelected={setSelected} />
      </div>
    </Fragment>  
  )
}

export default Dashboard
