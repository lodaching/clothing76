import ShopItem from './ShopItem'
import styles from './ShopConteiner.module.scss'

export default function ShopConteiner({ categories, title}) {
    return (

        <div className={styles.shop_container}>
            <h2 classname={styles.title}>{title}</h2>
            <div className={styles.item_list}>
                {categories.map(({id, name: title, price, remote_url: imageUrl}) => {
                    return <ShopItem key={id} title={title} price={price} imageUrl={imageUrl}/>
                })}


            </div>
        </div>
  
    )
  }