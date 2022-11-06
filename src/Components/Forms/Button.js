import React from 'react'
import styles from './Button.module.css'

const Buttons = ({children}) => {
  return (
    <button disabled className={styles.button}>{children}</button>
  )
}

export default Buttons
