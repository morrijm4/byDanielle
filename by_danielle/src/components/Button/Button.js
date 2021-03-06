import React from 'react';
import './Button.module.css';

const STYLES = [
    'btn--primary',
    'btn--outline',
    'btn--email'
]

const SIZE = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]

    return(
        <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}