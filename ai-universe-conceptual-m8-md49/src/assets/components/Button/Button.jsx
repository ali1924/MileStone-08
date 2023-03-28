import React from 'react';

const Button = ({ children }) => {
    // children props
    // console.log(props);
    // const { children } = props;
    // console.log(children);
    return (
        <>
            <button className="btn btn-primary">{children}</button>
        </>
    );
};

export default Button;