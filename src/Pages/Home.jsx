import Main from '../Components/Layouts/main'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './home.module.css'
import profile from './../images/me.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="hero_page">
        <Header />
        <Main />
      </div>
      <div id={styles.wrapper}>
        <section id={styles.skills_section}>
          <h1 id={styles.skills_header}>
            {' '}
            <span className={styles.skills_header}>My</span>{' '}
            <span className={styles.skills_highlight}>Skills</span>{' '}
          </h1>
          <div id={styles.skills}>
            <div id={styles.skills_profile}>
              <img
                src={profile}
                alt="profile picture"
                id={styles.profile_picture}
              />
            </div>
            <div id={styles.skills_stack}>
              <ul id={styles.skills_list}>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
              </ul>

              <div id={styles.intro}>
                <div>
                  <h1 id={styles.intro_header}> I love creating new things </h1>
                  <div>
                    <p id={styles.intro_desc}>
                      I started using computers when I was 14 years old. I
                      started with playing games (GTA Vice-city) Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Officiis
                      minima ipsam voluptatem provident, autem, suscipit amet
                      dolorem magni natus, facilis rerum officia illum nobis
                      quasi? Unde dolorum dignissimos ratione ad. Perferendis,
                      incidunt officia commodi libero accusamus minima
                      architecto ea.
                    </p>
                    <div className={styles.link_1}>
                      <p className={styles.about_link}>
                        <Link to="/about">continue reading my bio</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.project_section}>
          <h2>Projects</h2>
        </section>
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default Home
