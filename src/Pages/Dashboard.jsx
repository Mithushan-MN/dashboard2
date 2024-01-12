import React from 'react'
import Barchart from '../Charts/Barchart'
import Piechart from '../Charts/Piechart'
import './Dashboard.css'
import Linechart from '../Charts/Linechart'
import RangeBarChart from '../Charts/RangeBarChart'
import Card from '../Cards/Card'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Card/>
      </div>
      <div className='dcharts'>
      <Barchart />
      <Piechart/>
      </div>
      <div className='dcharts'>
        <Linechart/>
        <RangeBarChart/>
      </div>
    </div>
  )
}

export default Dashboard