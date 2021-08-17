import React, {useState} from 'react';
import useInputState from './Hooks/useInputState';


function SimpleFormInputHooks(){
    const [email, updateEmail, resetEmail] = useInputState("");

    return (
        <div>
            <h1>The value is...{email}</h1>
            <input type='text' value={email} onChange={updateEmail}></input>
            <button onClick={resetEmail}>Submit</button>
        </div>
    )
}
export default SimpleFormInputHooks;