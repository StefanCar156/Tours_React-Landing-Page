import React from 'react'
import { useGlobalContext } from '../context'
import sublinks from '../navData'

const Navbar = () => {
    const { openSubmenu, closeSubmenu } = useGlobalContext()
    const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const left = tempBtn.left
    const bottom = tempBtn.bottom + 3
    openSubmenu(page, {left, bottom})
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
          <h1>Tours Hammer</h1>
            <ul className="nav-links">
                {
                    sublinks.map((link, index) => {
                        return <li key={index}><button className="link-btn" onMouseOver={displaySubmenu}>{link.page}</button></li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar
