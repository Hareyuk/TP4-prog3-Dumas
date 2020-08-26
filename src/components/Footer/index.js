import React from 'react';

const Footer = ({name}) =>{
    const sayHi = 'Hello, ';
    return (
        <footer className='App-footer'>
            {`${sayHi} ${name}`}
        </footer>
    )
}

export default Footer;