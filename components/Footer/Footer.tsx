import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} Haakon Helmen Rusås</div>
    </footer>
  );
};

export default Footer;
