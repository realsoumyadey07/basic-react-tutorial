import React from 'react'
import styles from'./Item.module.css'
export default function Item({e, handleBuyButtonClick}) {
  
  return (
    <>
     <li className={`${styles.kgitem} list-group-item ${styles.bold}`} ><span className='bold'>{e}</span><button className={styles.button} onClick={handleBuyButtonClick}>Buy</button></li>
    </>
  )
}
