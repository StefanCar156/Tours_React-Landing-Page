import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const Submenu = () => {
  const {isSubmenuOpen, location, page:{page, links} } = useGlobalContext()
  const container = useRef(null)

  useEffect(() => {
    const submenu = container.current
    const {left, bottom} = location
    submenu.style.left = `${left}px`
    submenu.style.top = `${bottom}px`
  }, [location, links])

  return <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={container} >
    <div className={`submenu-center`}>
      {links.map((link, index) => {
        return <a key={index} href="#">{link}</a>
      })}
    </div>
  </aside>
}

export default Submenu
