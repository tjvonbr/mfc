import React from 'react'
import AppShell from '../components/app-shell'

const Membership: React.FC = () => {
  return (
    <AppShell>
      <div>
        <h1 className="membership-header">Are you ready to reclaim your health and fitness?</h1>
        <p>
          We'd love to work with you.  Whether you're looking to
          bulk up and prepare for your upcoming athletic season or
          looking to shed a few pounds and increase your overall
          fitness, our programming will provide exactly what you're
          looking for, fill out the form so we can figure out exactly
          how we can help you!  One of our coaches will reach out shortly!
        </p>
      </div>
    </AppShell>
  )
}

export default Membership
