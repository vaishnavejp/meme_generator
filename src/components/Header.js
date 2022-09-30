import React from 'react';

export default function Header() {
    return(
        <header className='header'>
            <img src="./images/trollface.png" 
                className='header--img'    
            />
            <h2 className='header--h2'>Meme Generator</h2>
            <h4 className='header--h4'>React Course - Project 3</h4>
        </header>
    )
}