// SignUp.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Updated import statement

import  auth  from '../../firebase'; // Updated import for auth object

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                console.log('Operation type:', userCredential.operationType); // Display operation type
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={signUp}>
                <h1>Creating Account:</h1>
                <input type='email' placeholder='username' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default SignUp;
