import styles from './main.module.css'
import { useNavigate } from 'react-router-dom'
import blog from './../../images/blog.jpg'
import { Link } from 'react-router-dom'

function Main() {
  let navigate = useNavigate()

  function handleClick() {
    navigate('./contact')
  }

  return (
    <main className={styles['main-section']}>
      <h1>I Build Websites to Help Businesses Grow</h1>
      <p>
        Hi, I am David, I am a computer Science Graduate and FrontEnd Developer.
        I specialize in Web Projects using mainly React Js and Express
      </p>

      <button className="btn btn-secondary rounded-full" onClick={handleClick}>
        Get in touch
      </button>

      <section className={styles['project-one']}>
        <img src={blog} className={styles.blog} />
        <h3>Blogging App</h3>
        <h5>(HTML. CSS. EXPRESS. MONGODB)</h5>
        <p className="">
          Built this blog from scratch. It allows users from all around the
          globe change the language to their preferred choice while still
          maintaining the aesthetics and interface.
          <div className={styles.link}>
            <Link to="/" className="link">
              Visit Site
            </Link>
          </div>
        </p>
      </section>
    </main>
  )
}

export default Main
