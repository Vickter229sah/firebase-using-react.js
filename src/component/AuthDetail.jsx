import React, { useEffect ,useState} from 'react';
import auth from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => unsubscribe();
    }, [] );

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successfully');
        }).catch(error => console.log(error));
    }

    return (
        <div>
            {authUser ? 
                <>
                    <p>{`Signed in as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </>
                :
                <p>Signed In</p>
            }
        </div>
    );
}

export default AuthDetails;
