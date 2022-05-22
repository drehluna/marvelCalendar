import { createContext, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {firebase, auth} from '../services/firebase'
export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
    const [userData, setUserData] = useState({})

    const history = useHistory()

    const handleLoginWithGoogle = useCallback(async () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        const result = await auth.signInWithPopup(provider)

        if(result.user) {
            const {uid, displayName} = result.user

            setUserData({
                isAuthenticate: true,
                uuid: uid,
                name: displayName,
            })
        }
    })

    const persistUser = useCallback(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                const {uid, displayName} = user
                setUserData({
                    isAuthenticate: true,
                    uuid: uid,
                    name: displayName,
                })
                return

            }
            setUserData({
                isAuthenticate: false,
            })
        })
        
    })
    
    return(
        <AuthContext.Provider value={{userData, setUserData, handleLoginWithGoogle, persistUser}}>
            {children}
        </AuthContext.Provider>
    )
}