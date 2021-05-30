import ShopItem from './ShopItem'
import ReactPaginate from 'react-paginate';
import styles from './ShopContainer.module.scss'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function ShopContainer({categories, title}) {

    const [pageNumber, setPageNumber] = useState(0);

    const itemsPerPage = 10;
    const itemsOffset = pageNumber * itemsPerPage;
    const pageCount = Math.ceil(categories.length / itemsPerPage)

    const selectedItems = categories.slice(itemsOffset, itemsOffset + itemsPerPage);

    const handlePageClick = ({selected}) => {setPageNumber(selected)}
    return (

        <div className={styles.shop_container}>
            <h2 classname={styles.title}>{title}</h2>
            <div className={styles.item_list}>
                {selectedItems.map(({id, name: title, price, remote_url: imageUrl}) => {
                    return <ShopItem key={id} title={title} price={price} imageUrl={imageUrl}/>
                })}
            </div>
            <div>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
  
    )
  }