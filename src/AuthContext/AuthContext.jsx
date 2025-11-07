import { createContext, useContext, useState } from "react";

export const authContext = createContext()
export const useAuth = () => useContext(authContext)

const AuthProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState("")
    const [modalStatus, setModalStatus] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const value = {
        isOpen,
        setIsOpen,
        showModal, 
        setShowModal,
        modalStatus, 
        setModalStatus,
        modalText, 
        setModalText


    }
    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}
export default AuthProvider