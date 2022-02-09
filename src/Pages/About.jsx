import Footer from '../Components/Footer'
import me from './../images/me.jpg'
import styles from './about.module.css'

function About() {
    return (
      <div className={styles.about}>
        <img src={me} className={styles.image} />
        <h4>Hi !</h4>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          perferendis incidunt, vel facere iure minima culpa id blanditiis
          repudiandae expedita ea suscipit laudantium aperiam voluptatum ab et
          distinctio illum vitae! Facere assumenda provident minus ut ea unde
          modi laboriosam velit doloremque fuga accusamus voluptates nesciunt
          laudantium atque repudiandae similique inventore obcaecati praesentium
          odio itaque quam eos, iste nihil veritatis. Saepe. Culpa aspernatur
          odit nemo cumque neque quo, labore facilis rerum vitae asperiores
          obcaecati, eius nostrum voluptatibus sit perspiciatis. Sed fuga
          architecto doloribus maxime at minus non magni nam fugiat ea.
        </p>
        <button className="btn rounded-full"> Download Resume </button>
        <Footer />
      </div>
    )
}

export default About
