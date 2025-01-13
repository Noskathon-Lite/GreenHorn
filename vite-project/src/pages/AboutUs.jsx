import NavBar from "../components/NavBar";
import styles from './AboutUs.module.css'; 

function AboutUs() {
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.content}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.description}>
          GreenHorn is a team dedicated to creating a positive impact on the environment. Our app
          encourages users to track their daily actions and make sustainable choices to help improve
          the world. By making small changes, we believe everyone can contribute to a greener future.
        </p>
        <div className={styles.imageWrapper}>
          <img 
            src="https://truflask.com/cdn/shop/articles/how-to-help-the-environment_8f7abc53-e1a1-4a57-9067-aacc0adedb3b_720x.jpg?v=1650665494" 
            alt="Climate Action" 
            className={styles.image}
          />
        </div>
        <p className={styles.mission}>
          Our mission is to inspire individuals to make a difference by providing the tools and
          resources they need to reduce their carbon footprint and live more sustainably.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
