import { createContext, useEffect, useState } from "react";
import User from "../../model/User";
import route from 'next/router'
import firebase from "../../firebase/config";
import Cookies from 'js-cookie'

interface AuthContextProps {
    user?: User
    loginWithGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizeUser(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0].providerId,
        imagemUrl: userFirebase.photoURL
    }
}

function manageCookie(logged: boolean) {
    if(logged) {
        Cookies.set('user-auth', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('user-auth')
    }
}

export function AuthPovider(props) {
    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState(true)

    async function setUpSession(userFirebase: firebase.User) {
        if(userFirebase?.email) {
            const user = await normalizeUser(userFirebase)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        }else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    async function loginWithGoogle() {
        const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

        await setUpSession(resp.user)
        route.push('/')
    }

    useEffect(() => {
        const cancelObserver = firebase.auth().onIdTokenChanged(setUpSession)
        return () => cancelObserver()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loginWithGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext