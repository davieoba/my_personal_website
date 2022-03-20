import Header from '../Components/Header'
import logo from './../images/not_found.svg'
import styles from './notfound.module.css'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div id={styles.not_found}>
      <div id={styles.header}>
        <Header />
      </div>

      <div id={styles.wrapper}>
        <div id={styles.image}>
          <img src={logo} alt="not found image" />
        </div>

        <Link to='/' id={styles.link}>
            Back to Home page
        </Link>
      </div>

      <div id={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Notfound
