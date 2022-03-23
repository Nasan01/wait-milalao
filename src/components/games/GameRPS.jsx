import React, { useState } from 'react';
import rock from '../../images/rock.png';
import paper from '../../images/paper.png';
import scissors from '../../images/scissors.png';

const TAB = [
    { linkImg: rock, name: "ROCK" },
    { linkImg: paper, name: "PAPER" },
    { linkImg: scissors, name: "SCISSOR" },
];

const Winner = ({ winner }) => {
    return (
        <h1 className='text-center'>{ winner } Win !! - Congratulations !! </h1>
    )
}

const Score = ({player, score}) => {
    return (
        <div>{ player } score : { score }</div>
    )
}

const Choice = ({ choice }) => {
    return (
        <div className='w-32 h-32 bg-stone-600'>
            <h2 className='text-3xl'>
                {choice ? <img src={choice.linkImg} className="h-32 w-32" alt={choice.name} /> : "wait..."}               
            </h2>
        </div>
    )
}

const ChoiceContainer = ({ choice, score }) => {
    return (
        <div className='flex text-center flex-col'>
            <Score player={"Your Oppent"} score={score.oppent} />
            <div className='flex justify-center my-2 text-center'>
                <div className='w-32'>
                    <Choice choice={choice.oppent} />
                </div>
            </div>
            <div className='flex justify-center my-2 text-center'>
                <div className='w-32'>
                    <Choice choice={choice.user} />                    
                </div>
            </div>
            <Score player={"Your"} score={score.user} />
        </div>
    )
}

const Gamerps = () => {

    const [choice, setChoice] = useState({});
    const [score, setScore] = useState({ user: 0, oppent: 0 });
    const [winner, setWinner] = useState(null);

    const play = (id) => {
        let idRand = Math.round(Math.random() * 2);
        setChoice({...choice, user: TAB[id], oppent: TAB[idRand]})
        if ((id === 0 && idRand === 2) || (id === 1 && idRand === 0) || (id === 2 && idRand === 1))
            setScore({ ...score, user: ++score.user })

        else if ((id === 0 && idRand === 1) || (id === 1 && idRand === 2) || (id === 2 && idRand === 0))
            setScore({ ...score, oppent: ++score.oppent })

        else if (id === idRand)
            console.log("the same");
        
        if ((score.user > score.oppent && score.user - score.oppent >= 3) || score.user === 5) 
            setWinner("You");
        else if ((score.oppent > score.user && score.oppent - score.user >= 3) || score.oppent === 5 ) 
            setWinner("Your Oppent");
        
    }
    const handleClick = (e) => {
        let index = parseInt(e.target.id);
        play(index);
    }

    return (
        <div>
            <h2 className='text-center text-4xl text-slate-300'>ROCK - PAPER - SCISSOR</h2>
            {!!winner ? <Winner winner={winner} /> : <ChoiceContainer choice={choice} score={score} />}
            
            <div className="flex justify-center flex-row space-x-8">
                { TAB.map((c, index) => {
                    return (
                        <div
                            id={index}
                            className='h-28 w-28 overflow-hidden rounded-full cursor-pointer'
                            key={index}
                            onClick={handleClick}
                            style={{backgroundImage:`url(${c.linkImg})`, backgroundSize:"cover"}}
                        >
                            
                        </div>
                    )
                })}
            </div>
        </div>
    );

}

export default Gamerps;
