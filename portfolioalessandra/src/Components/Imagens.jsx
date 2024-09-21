import {useState} from 'react'
import styles from './Imagens.module.css'
import PropTypes from 'prop-types';


const Imagens = ({src, alt}) => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); // Define o estado como "hovered"
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Remove o estado "hovered"
  };
 
return (
    <div className={styles.imageContainer} onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}>
      <img className={styles.image} src={src} alt={alt}  style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} />
    </div>
  );


}

Imagens.propTypes = {
  src: PropTypes.string.isRequired,  
  alt: PropTypes.string.isRequired,  
};

export default Imagens
