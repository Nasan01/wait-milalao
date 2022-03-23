import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from './Header';


const Banniere = () => {
    return (
        <div className='h-screen bg-bannierre flex flex-col items-center justify-center shadow-inner shadow-blue-600'>
            <div className='h-80 w-80 border-blue-300 border-4 flex flex-col items-center justify-center shadow-2xl shadow-blue-600 rounded-2xl'>
                <Link className='text-zinc-700 text-center shadow-2xl shadow-blue-500 bg-blue-200 p-6 hover:bg-zinc-700 hover:text-blue-200' to={"/games"}>Go To All Mini Games</Link>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className='h-36 p-6 bg-zinc-700 text-blue-200'>
            <h2 className='text-2xl'>About ! </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil error rerum quam repellat quis fugit, unde laboriosam nisi illo facere iste reprehenderit, molestias illum, perferendis eos deleniti libero? Fugit, illum.</p>

            <p>
                Contact : +261 32 73 467 92 - +261 34 01 330 99
            </p>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <Header />
            <Banniere />
            <About />
        </div>
    );
}

export default Home;
