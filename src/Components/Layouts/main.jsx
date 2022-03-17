import styles from './main.module.css'
import { useNavigate } from 'react-router-dom'
import blog from './../../images/blog.jpg'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

function Main() {
  let navigate = useNavigate()

  return (
    <main className={styles['main-section']}>
      <h1 className={styles.intro}>
        <span>Hi</span>,<span>I</span>
        <span>am</span>
        <span>David</span>
        <span>Bodunrin</span>
        <span>| </span>
        <span>web developer</span>
      </h1>

      <div className={styles.social_media}>
        <Link to={ "https://github.com/davieoba"}>
          <FaGithub size={30} />
        </Link>
        <Link to="www.twitter.com/bodunrindavid">
          <FaTwitter size={30} />
        </Link>
        <Link to="/">
          <BsLinkedin size={30} />
        </Link>
      </div>
      <h3 className={styles.small_intro}>
        I love trying out new things, I feel like if I know somthing
        well enough I can <span className={styles.hack}>hack</span> it 😅
      </h3>
    </main>
  )
}

export default Main
