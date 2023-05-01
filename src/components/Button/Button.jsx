import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <a className={styles.btn} href={props.url}>
        <button>{props.label}</button>
    </a>
  )
}

export default Button