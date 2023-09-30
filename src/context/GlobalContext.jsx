import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from '../constants/constants';
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

export function GlobalState({ children }) {
    const [isLogged, setIsLogged] = useState(false)

    async function user(body, page) {
        const PATH = page.includes("signup") ? BASE_URL + "/users/signup" : BASE_URL + "/users/login"
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

    function getToken() {
        return localStorage.getItem("token")
    }
    function removeToken() {
        localStorage.removeItem("token")
    }
    function setToken(token) {
        localStorage.setItem("token", token)
    }


    const context = {
        isLogged,
        setIsLogged,
        user,
        setToken,
        getToken,
        removeToken
    }

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}