import React from 'react'
import { FaDumbbell, FaRunning } from 'react-icons/fa'
import { IoLogoDribbble } from 'react-icons/io5'

export interface Props {
  name: string,
  description: string
}

const DashboardContainer: React.FC<Props> = (props) => {

  return (
    <div className="dashboard-content-wrapper">
      <h3 className="dashboard-content-header">{props.name}</h3>
      <p className="dashboard-content-description">
        {props.description}
      </p>
      <div className="dashboard-content-icon">
        {(() => {
          switch (props.name) {
            case "Women's Bootcamp": 
              return <FaRunning size={25} />  
            case "CrossFit": 
              return <FaDumbbell size={25} color='black' />
            case "Sports Xcel":
              return <IoLogoDribbble size={25} />
            default: return
          }
        })()}
      </div>
    </div>
  )
}

export default DashboardContainer
