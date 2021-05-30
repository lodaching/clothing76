import React from 'react'
import styles from './ShopItem.module.scss'

export default function ShopItem({ title, imageUrl, price }) {
  return (
      <div>
        <div className={`${styles.shop_item} `}>
        <img src={imageUrl} alt='' className={styles.background_image} />
            <div className={styles.content}>
            <h1 className={styles.title} > Add to Cart </h1>
            </div>

        </div>
        <p className={styles.title} > {title} </p>
        <p className={styles.title} > {`$${price}`} </p>
      </div>
  )
}