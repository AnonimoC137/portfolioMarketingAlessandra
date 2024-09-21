
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><a href="#sobre-mim">Sobre Mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contatos">Contatos</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
