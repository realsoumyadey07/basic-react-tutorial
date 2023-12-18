import React from 'react'
import styles from'./Item.module.css'
function Item({e, handleBuyButtonClick, bought}) {
  
  return (
    <>
     <li className={`${styles.kgitem} list-group-item ${styles.bold} ${bought?'active text-white':''}`} ><span className='bold'>{e}</span><button className={styles.button} onClick={handleBuyButtonClick}>Buy</button></li>
    </>
  )
}
export default Item