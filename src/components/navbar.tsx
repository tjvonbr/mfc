import React from 'react'
import NavbarLogo from './navbar-logo'
import NavItem from './nav-item'

const Navbar: React.FC = () => {
  return (
    <div className="navbar-wrapper">
      <NavbarLogo />
      <div className="navbar-route-wrapper">
        <NavItem route="/" title="Home" />
        <NavItem route="#" title="Get Started" />
        <NavItem route="membership" title="Membership" />
        <NavItem route="#" title="Testimonials" />
        <NavItem route="schedule" title="Schedule" />
      </div>
    </div>
  )
}

export default Navbar
