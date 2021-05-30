import MenuContainer from '../components/home/MenuContainer'

export async function getServerSideProps() {
  const response = await fetch('https://dry-wave-60207.herokuapp.com/api/categories')
  const categories = await response.json()

  return {
    props: {
      categories
    }
  }
}

export default function Home({ categories }) {
  return (

      <MenuContainer key={categories[0].cid} categories={categories} />

  )
}