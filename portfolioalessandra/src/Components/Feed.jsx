import styles from './Feed.module.css'
import imagem1 from '../assets/imagens/1.jpg';
import imagem3 from '../assets/imagens/3.jpg';
import imagem4 from '../assets/imagens/Feed -  15-07.jpg'
import Imagens from './Imagens';

const Feed = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.section1}>
            <div className={styles.containerTitulo}>
                <p>ME CHAMO</p>
            </div>
            <div className={styles.containerTexto}>
                <h1>Sobre Mim</h1>
                <p>Sou uma profissional criativa apaixonada por design e estratégias de marketing digital. Meu foco é desenvolver soluções visuais impactantes que ajudem marcas a se destacarem no ambiente online, criando campanhas personalizadas e artes únicas. Criação de conteúdo para redes sociais, estou sempre em busca de novas inspirações para melhorar minhas habilidades e trazer inovação para cada projeto que realizo.
                </p>
            </div>
        </section>
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
