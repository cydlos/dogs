import React from 'react'
import styles from './Input.module.css'

const Input  = ({ label, type }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input className={styles.input} type={type} />
    </div>
  )
}

export default Input
