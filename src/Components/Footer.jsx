import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
function Footer() {
  return (
    <footer>
      <div className={styles.foot}>
        <div id={styles.footer}>
          <div id={styles.footer_name}>
            <h2>David Bodunrin</h2>
            <p>&copy; 2022 Built and designed by David Bodunrin</p>
          </div>

          <div id={styles.footer_links}>
            <h3>Links</h3>
            <ul id={styles.links}>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/blog"> Blog </Link>
              </li>
              <li>
                <Link to="/projecs"> Projects </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.icons}>
          <h4>Get in touch </h4>
          <div id={styles.social}>
            <FaGithub size={24} fill="#fafaff" style={{ cursor: 'pointer' }} />
            <FaLinkedin
              size={24}
              fill="#fafaff"
              style={{ cursor: 'pointer' }}
            />
            <FaTwitter size={24} fill="#fafaff" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      <p className={styles.text}>&copy; David Bodunrin - All Rights reserved</p>
    </footer>
  )
}

export default Footer
