import React from 'react'
import AppShell from '../components/app-shell'
import DashboardContainer from '../components/dashboard-container'
import { features } from '../static/features'

const Dashboard: React.FC = () => {
  return (
    <AppShell>
      <div className="angled-div" />
      <h1 className="cta-header">Achieve a healthier, more active life!</h1>
      <div className="dashboard-features-wrapper">
        {features.map(({ name, description }) => (
          <DashboardContainer name={name} description={description} />
        ))}
      </div>
    </AppShell>
  )
}

export default Dashboard
