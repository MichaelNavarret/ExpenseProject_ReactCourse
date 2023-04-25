import './Card.css';
import React, {ReactNode} from 'react';

type CardProps = {
    className?: string; // Prop opcional para las clases de estilo adicionales
    children: ReactNode;
  };

const Card = (props: React.PropsWithChildren<CardProps>) => {
     // Combina las clases de estilo de 'card' con las clases de estilo 
     // adicionales del componente padre
    const classes = 'card ' + props.className;
    return(
        <div className={classes}>{props.children}</div>
    );
};

export default Card;
