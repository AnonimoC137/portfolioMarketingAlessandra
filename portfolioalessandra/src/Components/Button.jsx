import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({
  text,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  target,
  icon,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${styles.button} ${styles[variant]}`}
      >
        {icon && <img src={icon} alt="" className={styles.icon} />} {/* ✅ */}
        {text}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      {icon && <img src={icon} alt="" className={styles.icon} />} {/* ✅ */}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  target: PropTypes.string,
  icon: PropTypes.string, // ✅ nova validação
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  onClick: () => {},
  href: null,
  target: undefined,
  icon: null,
};


export default Button;