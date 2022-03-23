import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='h-24 bg-zinc-700'>
            <h1 className='text-3xl text-blue-200 p-5'>
                <Link to={"/"}>Mini-Games</Link>
            </h1>
        </header>
    )
}

export default Header;
