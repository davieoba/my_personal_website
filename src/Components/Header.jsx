import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CgMenu } from 'react-icons/cg'

function Header(props) {
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked((prev) => !prev)
  }

  const handleCancel = () => {
    setClicked((prev) => !prev)
  }

  // const handle_projects = () => {
  //   props.refProp.current.scrollIntoView()
  // }

  return (
    <header>
      <div id={styles.header_nav}>
        <h1>
          <Link to="/" className={styles.header_link}>David Bodunrin</Link>
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

      <div id={styles.testing}>
        <nav
          id={clicked ? styles.navbar_display_block : styles.navbar}
          className={styles.navbar_display}
        >
          <Link to="/about" className={styles.link_1}>
            About
          </Link>
          <a href="/#contact_section" className={styles.link_2}>
            Contact
          </a>
          <a
            href="/#all_projects"
            className={styles.link_3}
            // onClick={handle_projects}
          >
            Projects
          </a>

          {/* <li>
                <a href="/#all_projects"> Projects </a>
              </li> */}
          <Link to="/blog" className={styles.link_4}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}

// http://localhost:3000/#all_project

export default Header
