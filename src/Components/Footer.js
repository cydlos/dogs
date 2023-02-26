import React from 'react'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs.svg'

const Footer = () => {
  return <footer className={styles.footer}>
    <Dogs />
    <p> Dogs. Alguns direitos reservados. </p>
  </footer>
};

export default Footer
