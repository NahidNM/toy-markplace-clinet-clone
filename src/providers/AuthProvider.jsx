import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

 const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [reload, setReload] =useState(0);

    // Email password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

   

// Google pop Up
const googleSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

// Github pop up
const githubSignIn = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}

// log out

const logOut = ()=>{
    setLoading(false)
    return signOut(auth);
}

const updateUser = ( name, photo) =>{
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
    })
}


useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
        // console.log('obser logged', loggedUser)
        setLoading(false)
        setUser(loggedUser)
    })
    return () =>{
        unsubscribe()
    }
}, [reload])

const authInfo = {
    user,
    loading,
    setReload,
    createUser,
    signIn,
    updateUser,
    googleSignIn,
    githubSignIn,
    logOut,
}

    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>    
        
    );
};

export default AuthProvider;