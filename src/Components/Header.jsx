import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CgMenu } from 'react-icons/cg'

function Header(props) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked((prev) => !prev)
  }

  const handleCancel = () => {
    setClicked((prev) => !prev)
  }

  console.log(clicked)

  return (
    <header>
      <div id={styles.header_nav}>
        <h1>
          <Link to="/">David Bodunrin</Link>
        </h1>

        <div className={styles.nav_icon}>
          <CgMenu
            className={styles.icon}
            id={clicked ? styles.menubar_display_none : styles.menubar}
            onClick={handleClick}
          />
          <FaTimes
            className={styles.icon}
            id={clicked ? styles.times_display_block : styles.times}
            onClick={handleCancel}
          />
        </div>
      </div>

      <nav
        id={clicked ? styles.navbar_display_block : styles.navbar}
        className={styles.navbar_display}
      >
        <Link to="/about" className={styles.link_1}>
          About
        </Link>
        <Link to="/contact" className={styles.link_2}>
          Contact
        </Link>
        <Link to="/projects" className={styles.link_3}>
          Projects
        </Link>
        <Link to="/blog" className={styles.link_4}>
          Blog
        </Link>
      </nav>
    </header>
  )
}

export default Header
