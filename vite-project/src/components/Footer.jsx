import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          🌍 Protect Our Planet | Contribute to a Sustainable Future
        </p>
        <div className={styles.teamInfo}>
          <p className={styles.teamText}>
            <strong>GreenHorn</strong> - Hackathon Team from <strong>NCIT</strong>
          </p>
          <p className={styles.teamMembers}>
            Team Members: <strong>Bishal Neupane</strong> & <strong>Bijit Lamichhane</strong>
          </p>
        </div>
        <div className={styles.socials}>
          <a href="https://twitter.com" className={styles.icon}>
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://facebook.com" className={styles.icon}>
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://instagram.com" className={styles.icon}>
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <p className={styles.copyText}>© 2025 GreenHorn | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
