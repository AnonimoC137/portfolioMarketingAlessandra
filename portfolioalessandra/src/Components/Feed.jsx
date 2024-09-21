import styles from './Feed.module.css'
import imagem1 from '../assets/imagens/1.jpg';
import imagem3 from '../assets/imagens/3.jpg';
import imagem4 from '../assets/imagens/Feed -  15-07.jpg'
import Imagens from './Imagens';

const Feed = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.section1}></section>
        <h1 className={styles.tituloCRS}>Artes feitas para @CRS</h1>
        <section className={styles.section2}>
            
            <Imagens src={imagem1} alt={'imagem1'}/>
            <Imagens src={imagem3} alt={'imagem3'}/>
            <Imagens src={imagem4} alt={'imagem4'}/>
        </section>
      </div>
    </>
  )
}

export default Feed
