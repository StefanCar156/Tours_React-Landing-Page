import React from 'react'
import sublinks from '../navData'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext()

  return <aside className={`sidebar-wrapper ${isSidebarOpen && 'show'} `}>
    <div className="sidebar">
      <div className="sidebar-links">
        {sublinks.map((item, index) => {
          const {links} = item;
          return <article key={index}>
              <div className="sidebar-sublinks">
                {links.map((link, index) => {
                  return <a key={index} href="#">{link}</a>
                })}
              </div>
            </article>
        })}
      </div>
    </div>
  </aside>
}

export default Sidebar
