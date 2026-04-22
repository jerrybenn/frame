import { createElement } from 'react'
import { NavLink } from 'react-router-dom'

export function SidebarNavItem({ label, to, icon, filledWhenActive }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) => `sidebar-nav-item${isActive ? ' is-active' : ''}`}
    >
      {({ isActive }) => {
        const iconProps =
          filledWhenActive && isActive
            ? {
                size: 19,
                strokeWidth: 0,
                fill: 'currentColor',
                className: 'sidebar-nav-item__icon',
                'aria-hidden': true,
              }
            : {
                size: 19,
                strokeWidth: isActive ? 2.1 : 1.65,
                fill: 'none',
                className: 'sidebar-nav-item__icon',
                'aria-hidden': true,
              }
        return (
          <>
            {createElement(icon, iconProps)}
            <span className="sidebar-nav-item__label">{label}</span>
          </>
        )
      }}
    </NavLink>
  )
}
