import React from 'react';
import styles from './button.module.css';

const Button = ({children, handleClick}) => <button className={styles.button} onClick={handleClick}>{children}</button>

export default Button;