import styles from './contact.module.css'
import Footer from '../Components/Footer'

export default function Contact() {
    return (
      <div className={styles.contact}>
        <h2> Get in Touch</h2>
        <h5> Available for interviews, collaborations, projects and coffee.</h5>

        <form action="">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name / Company Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="message"
              placeholder="Message"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-accent rounded-full"> Submit </button>
        </form>
        <Footer />
      </div>
    )
}
