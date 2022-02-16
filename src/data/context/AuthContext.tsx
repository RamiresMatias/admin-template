import { createContext, useState } from "react";
import User from "../../model/User";
import route from 'next/router'

interface AuthContextProps {
    user?: User
    loginWithGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

// async function normalizeUser(userFirebase: firebase.User): Promise<User> {
//     const token = await userFirebase.getIdToken()
//     return {
//         uid: userFirebase.uid,
//         name: userFirebase.displayName,
//         email: userFirebase.email,
//         token,
//         provider: userFirebase.providerData[0].providerId,
//         imagemUrl: userFirebase.photoURL
//     }
// }

export function AuthPovider(props) {
    const [user, setUser] = useState<User>(null)

    async function loginWithGoogle() {
        console.log('Login Gogle');
        route.push('/')
    }

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