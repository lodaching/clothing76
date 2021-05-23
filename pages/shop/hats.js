import ShopConteiner from '../../components/category/ShopConteiner'

export async function getServerSideProps() {

    const response = await fetch(`https://dry-wave-60207.herokuapp.com/api/shop/hats`)
    const items = await response.json()

    return {
        props: {
            items
        }
    }
}

export default function HatsPage({ items }) {
  return (
    <div>
      <ShopConteiner categories= {items} title={'Hats'}/>
    </div>

  )
}