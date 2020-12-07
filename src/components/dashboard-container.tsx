import React from 'react'
import { FaDumbbell } from 'react-icons/fa'

const DashboardContainer: React.FC = () => {
  return (
    <div className="dashboard-content-wrapper">
      <h3 className="dashboard-content-header">Sports Xcel</h3>
      <p className="dashboard-content-description">
        Designed for athletes seeking specific training to perform
        better in their sport
      </p>
      <div className="dashboard-content-icon">
        <FaDumbbell  size={25}/>
      </div>
    </div>
  )
}

export default DashboardContainer
