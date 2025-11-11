import styles from './Feed.module.css'
import imagem1 from '../assets/imagens/1.jpg';
import imagem3 from '../assets/imagens/3.jpg';
import imagem4 from '../assets/imagens/Feed -  15-07.jpg'
import imagem5 from '../assets/imagens/persona1.png'
import imagem6 from '../assets/imagens/persona2.png'
import imagem7 from '../assets/imagens/persona3.png'
import imagem8 from '../assets/imagens/persona4.png'
import imagem9 from '../assets/imagens/persona5.png'
import imagem10 from '../assets/imagens/persona6.png'
import imagem11 from '../assets/imagens/persona7.png'
import imagem12 from '../assets/imagens/persona8.png'
import imagem13 from '../assets/imagens/persona9.png'
import Imagens from './Imagens';

const Feed = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.section1}>
            <div className={styles.containerTitulo}>
                <p>Bem vindo ao meu Portifolio!</p>
            </div>
            <div className={styles.containerTexto}>
                <h1>Sobre Mim</h1>
                <p>Sou uma profissional criativa apaixonada por design e estratégias de marketing digital. Meu foco é desenvolver soluções visuais impactantes que ajudem marcas a se destacarem no ambiente online, criando campanhas personalizadas e artes únicas. Criação de conteúdo para redes sociais, estou sempre em busca de novas inspirações para melhorar minhas habilidades e trazer inovação para cada projeto que realizo.
                </p>
            </div>
        </section>
        <h1 className={styles.tituloCRS}>Artes feitas para @CRS</h1>
        <section className={styles.section2} id="projetos">
            
            <Imagens src={imagem1} alt={'imagem1'}/>
            <Imagens src={imagem3} alt={'imagem3'}/>
            <Imagens src={imagem4} alt={'imagem4'}/>
        </section>
        <h1 className={styles.tituloCRS}>Artes feitas Para Clientes diversos</h1>
        <section className={styles.section2}>
            
            <Imagens src={imagem5} alt={'imagem1'}/>
            <Imagens src={imagem6} alt={'imagem3'}/>
            <Imagens src={imagem7} alt={'imagem4'}/>

            <Imagens src={imagem8} alt={'imagem1'}/>
            <Imagens src={imagem9} alt={'imagem3'}/>
            <Imagens src={imagem10} alt={'imagem4'}/>

            <Imagens src={imagem11} alt={'imagem1'}/>
            <Imagens src={imagem12} alt={'imagem3'}/>
            <Imagens src={imagem13} alt={'imagem4'}/>
        </section>

      </div>
    </>
  )
}

export default Feed
