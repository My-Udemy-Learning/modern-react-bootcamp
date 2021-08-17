import React, {useState} from 'react';
import useToggle from './Hooks/useToggle';

function Toggler(){
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
    const [isBanana, toggleIsBanana] = useToggle(true)
    // const toggleIsHappy = () => {
    //     setIsHappy(!isHappy)
    // }
    // const toggleIsHeartBroken = () => {
    //     setIsHeartBroken(!isHeartBroken)
    // }

    return(
        <div>
        <h1 onClick={toggleIsHappy}>{isHappy ? "😃" : "😭"}</h1>
        <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? "💔" : "❤️"}</h1>
        <h1 onClick={toggleIsBanana}>{isBanana ? "🍌" : "🍎"}</h1>

        </div>
        )
}
export default Toggler;