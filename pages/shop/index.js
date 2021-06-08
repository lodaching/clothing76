import ShopContainer from '../../components/category/ShopContainer'

export async function getServerSideProps() {

  const response = await fetch(`https://dachingapi.herokuapp.com/Products`)
  const items = await response.json()

  return {
    props: {
      items
    }
  }
}

export default function JacketsPage({ items }) {
  return (
    <ShopContainer categories={items} title={'Shop'} />

  )
}