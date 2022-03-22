import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home Page
            <Link to={"/games"}>Go To All Mini Games</Link>
        </div>
    );
}

export default Home;
