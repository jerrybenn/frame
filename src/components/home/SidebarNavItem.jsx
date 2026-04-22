import { createElement } from 'react'

export function SidebarNavItem({ label, active, icon }) {
  return (
    <button type="button" className={`sidebar-nav-item${active ? ' is-active' : ''}`}>
      {createElement(icon, { size: 17 })}
      <span>{label}</span>
    </button>
  )
}
