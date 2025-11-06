import { createContext, useContext, useState } from "react";

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)


    const value = {
        isOpen,
        setIsOpen

    }
    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}
export default AuthProvider