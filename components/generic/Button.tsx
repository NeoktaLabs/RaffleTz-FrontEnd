import React from 'react';

const Button = ({children, callback}) => {
    return (
        <button onClick={callback}>
            {children}
        </button>
    );
};

export default Button;
