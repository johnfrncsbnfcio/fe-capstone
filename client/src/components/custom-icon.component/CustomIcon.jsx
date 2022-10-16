import React from 'react'
import styles from './customicon.module.scss'
import { FaHome, FaTh } from 'react-icons/fa'

const CustomIcon = props => {
  return (
    <div className={props.customStyle === 'cs' ? styles.customBoxExt : styles.customBox}>
        {props.icon === 'FaHome' && <FaHome className={styles.icon}/> }
        {props.icon === 'FaTh' && <FaTh className={styles.icon}/> }
        {props.icon === '' && '' }
        <p>{props.text}</p>
    </div>
  )
}

export default CustomIcon