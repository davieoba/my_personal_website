import { useLocation, Link } from 'react-router-dom'
import styles from './menu.module.css'

function Menu() {
  
  return (
    <div className={styles.menu}>
      <h2>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </h2>
      <h2>
        <Link to="/about" className={styles.link}>
          About Me
        </Link>
      </h2>
      <h2>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </h2>
    </div>
  )
}

export default Menu
