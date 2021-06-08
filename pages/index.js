import MenuContainer from '../components/home/MenuContainer'

export async function getServerSideProps() {
  const response = await fetch('https://dachingapi.herokuapp.com/Categories')
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