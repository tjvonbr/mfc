import React from 'react'

type NavItemProps = {
  route: string
  title: string,
}

const NavItem = ({ route, title }: NavItemProps) => {
  return (
    <p className="navbar-item">
      <a href={route}>{title}</a>
    </p>
  )
}

export default NavItem
