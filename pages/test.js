import ShopItemList from '../components/category/ShopConteiner'

export async function getServerSideProps() {
    const response = await fetch('https://dry-wave-60207.herokuapp.com/api/shop/hats')
    const categories = await response.json()
  
    return {
      props: {
        categories
      }
    }
}

export default function Test({ categories }) {
    return (

        <ShopItemList categories= {categories}/>
  
    )
  }