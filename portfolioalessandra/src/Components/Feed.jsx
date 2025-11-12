import styles from './Feed.module.css'
import img1 from '../assets/imagens/001.jpg'
import img2 from '../assets/imagens/002.png'
import img3 from '../assets/imagens/003.png'
import img4 from '../assets/imagens/004.png'
import img5 from '../assets/imagens/005.png'
import img6 from '../assets/imagens/006.png'
import img7 from '../assets/imagens/007.jpg'
import img8 from '../assets/imagens/008.png'
import img9 from '../assets/imagens/009.png'
import img10 from '../assets/imagens/010.png'
import img11 from '../assets/imagens/011.png'
import img12 from '../assets/imagens/012.png'
import img13 from '../assets/imagens/013.png'
import img14 from '../assets/imagens/014.png'
import img15 from '../assets/imagens/015.png'
import img16 from '../assets/imagens/016.png'
import img17 from '../assets/imagens/017.png'
import img18 from '../assets/imagens/018.png'
import img20 from '../assets/imagens/020.png'
import linkedinIcon from '../assets/imagens/linkedin.png';
import Imagens from './Imagens';
import Button from './Button';

const Feed = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.section1}>
            <div className={styles.containerTitulo}>
                <p>Bem vindo ao meu portfólio!</p>
                <div>
                  <Button 
                    text="Linkedin" 
                    href="https://www.linkedin.com/in/alessandranatiele/" 
                    target="_blank"
                    variant="primary"
                    icon={linkedinIcon} 
                  />
                </div>
            </div>
            <div className={styles.containerTexto}>
            <h1>
              <span className={styles.detalhe}></span>
              Sobre Mim
            </h1>

            <p>
              Sou uma <strong>profissional criativa</strong> apaixonada por 
              <strong> design</strong> e <strong>estratégias de marketing digital</strong>.
              Meu foco é desenvolver <strong>soluções visuais impactantes</strong> que
              ajudem marcas a se destacarem no ambiente online, criando 
              <strong> campanhas personalizadas</strong> e <strong>artes únicas</strong>.
            </p>

            <p>
              Especialista em <strong>criação de conteúdo para redes sociais</strong>, 
              estou sempre em busca de novas inspirações para aprimorar minhas habilidades 
              e trazer <strong>inovação</strong> a cada projeto que realizo.
            </p>
          </div>
        </section>
        <h1 className={styles.tituloCRS}>Artes feitas para @vinipradoc</h1>
        <section className={styles.section2} id="projetos">
            
            <Imagens src={img10} alt={'imagem1'}/>
            <Imagens src={img11} alt={'imagem3'}/>
            <Imagens src={img12} alt={'imagem4'}/>

            <Imagens src={img13} alt={'imagem1'}/>
            <Imagens src={img14} alt={'imagem3'}/>
            <Imagens src={img15} alt={'imagem4'}/>

            <Imagens src={img16} alt={'imagem1'}/>
            <Imagens src={img17} alt={'imagem3'}/>
            <Imagens src={img18} alt={'imagem4'}/>
            <Imagens src={img20} alt={'imagem4'}/>
            
        </section>
        <h1 className={styles.tituloCRS}>Artes feitas para clientes diversos</h1>
        <section className={styles.section2}>
            
            <Imagens src={img1} alt={'imagem1'}/>
            <Imagens src={img2} alt={'imagem1'}/>
            <Imagens src={img3} alt={'imagem1'}/>
            <Imagens src={img4} alt={'imagem1'}/>
            <Imagens src={img5} alt={'imagem1'}/>
            <Imagens src={img6} alt={'imagem1'}/>
            <Imagens src={img7} alt={'imagem1'}/>
            <Imagens src={img8} alt={'imagem1'}/>
            <Imagens src={img9} alt={'imagem1'}/>
            
        </section>
        <h1 className={styles.tituloCRS}>Meus Contatos</h1>
        <section className={styles.section3} id='contatos'>
          <Button text='Whatsapp' variant="secondary"/>
          <Button text='Linkedin' variant="secondary"/>
          <Button text='Gmail' variant="secondary"/>
        </section>

      </div>
    </>
  )
}

export default Feed
