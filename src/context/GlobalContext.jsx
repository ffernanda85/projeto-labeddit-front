import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from '../constants/constants';

export const GlobalContext = createContext()

export function GlobalState({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    
    async function userLogin(body) {
        const PATH = BASE_URL + "/users/login"
        await axios.post(PATH, body)
            .then(response => {
                setToken(response.data.token)
                setIsLogged(true)
            })
            .catch(error => {
                console.log(error)
                //criar modal com sweetAlert
            })
    }

    function setToken(token) {
        localStorage.setItem("token", token)
    }


    const context = {
        isLogged,
        setIsLogged,
        userLogin
    }

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}