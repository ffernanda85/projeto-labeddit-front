import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from '../constants/constants';
import Swal from 'sweetalert2'

export const GlobalContext = createContext()

export function GlobalState({ children }) {
    const [isLogged, setIsLogged] = useState(false)
    const [reload, setReload] = useState(false)

    function modal(title, text, icon) {
        Swal.fire({ title, text, icon })
    }

    async function user(body, page) {
        const PATH = page.includes("signup") ? BASE_URL + "/users/signup" : BASE_URL + "/users/login"
        await axios.post(PATH, body)
            .then(response => {
                setToken(response.data.token)
                setIsLogged(true)
            })
            .catch(error => {
                if (typeof error.response.data === 'string') {
                    modal('Inválido', error.response.data, 'error')
                } else {
                    modal('Erro', error.response.data[0].message, 'error')
                }
            })
    }

    async function createPostAPI(body) {
        const PATH = BASE_URL + "/posts"

        await
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
        removeToken,
        reload,
        setReload
    }

    return (
        <GlobalContext.Provider value={context}>
            {children}
        </GlobalContext.Provider>
    )
}