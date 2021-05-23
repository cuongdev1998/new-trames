import React from 'react'
import './index.scss';
export const Button = ({
    className = "",
    type = 'primary',
    isSubmitBtn,
    loading,
    disable,
    onClick,
    children
}) => {
    return (
        <button
            type={isSubmitBtn ? "submit" : "button"}
            className={`btn ${type} ${className} ${disable ? 'disabled' : ''} ${loading ? 'loading' : ''}`}
            onClick={onClick}
        >
            {children && (
                <span>{children}</span>
            )}
            
        </button>
    )
}
