import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const signupWithEmailPass = (email, password)=>{
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const authData={
        signupWithEmailPass,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;