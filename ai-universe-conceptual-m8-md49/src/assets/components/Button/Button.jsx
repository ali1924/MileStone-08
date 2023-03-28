import React from 'react';

const Button = ({ children }) => {
    // children props
    // console.log(props);
    // const { children } = props;
    // console.log(children);
    return (
        <div className='text-center'>
            <button className="btn btn-accent">{children}</button>
        </div>
    );
};

export default Button;