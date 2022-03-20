import Main from '../Components/Layouts/main'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import styles from './home.module.css'
import profile from './../images/me.jpg'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'

function Home() {
  const myRef = useRef(null)

  // useEffect(() => {
  //   console.log(window.location.href)
  //   if(window.location.href === 'http://localhost:3000/#all_project'){
  //     myRef.current.scrollIntoView()
  //   }
  // }, [])

  return (
    <>
      <div className="hero_page">
        <Header refProp={myRef} />
        <Main />
      </div>
      <div id={styles.wrapper}>
        <section id={styles.skills_section}>
          <h1 id={styles.skills_header} className={styles.section_headers}>
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
              <ul id={styles.skills_list} className={styles.skills_list}>
                <li>React</li>
                <li>Redux toolkit</li>
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
          <h2 className={styles.section_headers} id="all_projects" ref={myRef}>
            My
            <span className={styles.skills_highlight}> Projects</span>
          </h2>

          <div id={styles.section_projects}>
            <div id={styles.project_1} className={styles.project}>
              <div className={styles.project_text}>
                <div className={styles.project_stack}>
                  FULL STACK DEVELOPER / TECH LEAD
                </div>

                <h2 className={styles.project_name}> Movies </h2>

                <ul id={styles.project_1_stack} className={styles.skills_list}>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Redux toolkit</li>
                  <li>Tailwind css</li>
                </ul>
                <div className={styles.project_desc}>
                  <div>I built this app from scratch</div>
                </div>
                <div className={styles.view_project}>
                  <Link to="/" className={styles.view_project_link}>
                    {' '}
                    View Project{' '}
                  </Link>
                </div>
              </div>

              <div className={styles.project_img}>
                <img src={profile} alt="project picture" />
              </div>
            </div>

            <hr />
            <div id={styles.project_2} className={styles.project}>
              <div className={styles.project_text}>
                <div className={styles.project_stack}>
                  FULL STACK DEVELOPER / TECH LEAD
                </div>

                <h2 className={styles.project_name}> Blog </h2>

                <ul id={styles.project_1_stack} className={styles.skills_list}>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Redux toolkit</li>
                  <li>Tailwind css</li>
                </ul>
                <div className={styles.project_desc}>
                  <div>I built this app from scratch</div>
                </div>
                <div className={styles.view_project}>
                  <Link to="/" className={styles.view_project_link}>
                    {' '}
                    View Project{' '}
                  </Link>
                </div>
              </div>

              <div className={styles.project_img}>
                <img src={profile} alt="project picture" />
              </div>
            </div>
            <hr />

            <div id={styles.project_2} className={styles.project}>
              <div className={styles.project_text}>
                <div className={styles.project_stack}>
                  FULL STACK DEVELOPER / TECH LEAD
                </div>

                <h2 className={styles.project_name}> Web Scraping </h2>

                <ul id={styles.project_1_stack} className={styles.skills_list}>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Redux toolkit</li>
                  <li>Tailwind css</li>
                </ul>
                <div className={styles.project_desc}>
                  <div>I built this app from scratch</div>
                </div>
                <div className={styles.view_project}>
                  <Link to="/" className={styles.view_project_link}>
                    {' '}
                    View Project{' '}
                  </Link>
                </div>
              </div>

              <div className={styles.project_img}>
                <img src={profile} alt="project picture" />
              </div>
            </div>

            <hr />

            <div id={styles.project_2} className={styles.project}>
              <div className={styles.project_text}>
                <div className={styles.project_stack}>
                  FULL STACK DEVELOPER / TECH LEAD
                </div>

                <h2 className={styles.project_name}> Github Finder </h2>

                <ul id={styles.project_1_stack} className={styles.skills_list}>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Redux toolkit</li>
                  <li>Tailwind css</li>
                </ul>
                <div className={styles.project_desc}>
                  <div>I built this app from scratch</div>
                </div>
                <div className={styles.view_project}>
                  <Link to="/" className={styles.view_project_link}>
                    {' '}
                    View Project{' '}
                  </Link>
                </div>
              </div>

              <div className={styles.project_img}>
                <img src={profile} alt="project picture" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contact_section} id="contact_section">
          <div className={styles.contact_section_div}>
            <h2 id={styles.contact_section_header}>
              Let's have a{' '}
              <span className={styles.skills_highlight}> chat </span>{' '}
              <span className={styles.coffee}>☕</span>
            </h2>
            <h3 id={styles.contact_section_link}>
              <a
                href="mailto:bodunrindavidbond@gmail.com"
                className={styles.contact_link}
              >
                {' '}
                bodunrindavidbond@gmail.com
              </a>
            </h3>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Home
