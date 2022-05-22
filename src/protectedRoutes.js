import { useEffect } from "react";
import { useHistory } from "react-router-dom"

export default function ProtectedRoute ({userData, children}) {
    const history = useHistory()
    
    useEffect(() => {
        if ("isAuthenticate" in userData) {
            if(!userData.isAuthenticate) {
                history.push('/')
            }
        }
      }, [userData]);
    
    return children
}