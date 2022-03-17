import Main from '../Components/Layouts/main'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './home.module.css'
import profile from './../images/me.jpg'

function Home() {
  return (
    <div className="hero_page">
      <Header />
      <Main />
      <section id={styles.skills_section}>
        <h1 id={styles.skills_header}>
          {' '}
          <span>My</span> <span>Skills</span>{' '}
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
                  <p>
                    I started using computers when I was 14 years old. I started
                    with playing games (GTA Vice-city) Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Officiis minima ipsam
                    voluptatem provident, autem, suscipit amet dolorem magni
                    natus, facilis rerum officia illum nobis quasi? Unde dolorum
                    dignissimos ratione ad. Perferendis, incidunt officia
                    commodi libero accusamus minima architecto ea. Modi sed quae
                    qui accusamus consequatur veritatis doloribus tempore sunt
                    excepturi corporis veritatis qui, ducimus nihil? Reiciendis
                    qui saepe laudantium? Adipisci atque impedit a
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
