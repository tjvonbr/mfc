import React from 'react'
import AppShell from '../components/app-shell'
import DashboardContent from '../components/dashboard-container'

const Dashboard: React.FC = () => {
  return (
    <AppShell>
      <div className="angled-div" />
      <div className="dashboard-features-wrapper">
        <DashboardContent />
        <DashboardContent />
        <DashboardContent />
      </div>
    </AppShell>
  )
}

export default Dashboard
