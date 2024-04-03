// SignIn.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Updated import statement

import  auth  from '../../firebase'; // Updated import for auth object

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
            <form onSubmit={signIn}>
                <h1>Login In</h1>
                <input type='email' placeholder='username' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default SignIn;
