import React from 'react'
// import '../App.css'
import styles from'./Item.module.css'
export default function Item(props) {
  return (
    <>
     <li className={`${styles.kgitem} list-group-item ${styles.bold}`} ><span className='bold'>{props.e}</span></li>
    </>
  )
}
