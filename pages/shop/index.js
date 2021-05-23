import ShopConteiner from '../../components/category/ShopConteiner'

export async function getServerSideProps() {

    const response = await fetch(`https://dry-wave-60207.herokuapp.com/api/shop/overview`)
    const items = await response.json()

    return {
        props: {
            items
        }
    }
}

export default function JacketsPage({ items }) {
    const categories = ['hats', 'jackets', 'sneakers', 'womens', 'mens']
  return (
    <div>
        {categories.map((cat_name) => {
            let cat_items = items[cat_name].slice(0,5)
            return <ShopConteiner categories={cat_items} title = {cat_name.charAt(0).toUpperCase() + cat_name.slice(1)}/>
        })}
    </div>

  )
}