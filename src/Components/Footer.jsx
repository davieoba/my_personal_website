import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styles from './footer.module.css'
function Footer() {
  return (
    <footer>
      <div className={styles.icons}>
        <FaGithub size={24} fill="#3455DB" style={{ cursor: 'pointer' }} />
        <FaLinkedin size={24} fill="#3455DB" style={{ cursor: 'pointer' }} />
        <FaTwitter size={24} fill="#3455DB" style={{ cursor: 'pointer' }} />
      </div>
      <p className={styles.text}>&copy; David Bodunrin - All Rights reserved</p>
    </footer>
  )
}

export default Footer
