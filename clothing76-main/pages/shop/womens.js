import ShopContainer from '../../components/category/ShopContainer'

export async function getServerSideProps() {

    const response = await fetch(`https://dry-wave-60207.herokuapp.com/api/shop/womens`)
    const items = await response.json()

    return {
        props: {
            items
        }
    }
}

export default function WomensPage({ items }) {
  return (
    <div>
      <ShopContainer categories= {items} title={'Womens'}/>
    </div>

  )
}