import Link from 'next/link'
import styles from './nav.module.scss'
import {Dropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <div>
      <div className={styles.navContainer}>
        <label for="check" className={styles.navContainer__checkBtn}>
        </label>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>

            <li className={styles.nav__listLogo}>
              <Link href="/"><img src="/favicon.svg" alt="" /></Link>
            </li>

            <li className={styles.nav__listItem}>
              <Link href="/">Home</Link>
            </li>

            <li className={styles.nav__listItem}>
              <Link href="/shop">Shop</Link>
            </li>

            <li className={styles.nav__listItem}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/shop/hats">Hats</Dropdown.Item>
                  <Dropdown.Item href="/shop/jackets">Jackets</Dropdown.Item>
                  <Dropdown.Item href="/shop/sneakers">Sneakers</Dropdown.Item>
                  <Dropdown.Item href="/shop/womens">Women's</Dropdown.Item>
                  <Dropdown.Item href="/shop/mens">Men's</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
