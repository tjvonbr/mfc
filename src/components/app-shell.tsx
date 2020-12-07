import React from 'react'
import Navbar from './navbar'

const AppShell: React.FC = ({ children }) => {
  return (
    <div className="app-shell">
      <Navbar />
        {children}
    </div>
  )
}

export default AppShell
