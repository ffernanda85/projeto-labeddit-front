import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/login/LoginPage'
import { SignupPage } from '../pages/signup/SignupPage'
import { PostPage } from '../pages/post/PostPage'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <LoginPage/> } />
                <Route path='/signup' element={ <SignupPage/> } />
                <Route path='/posts' element={ < PostPage/> } />
               {/*  <Route path='/comments' element={ < PostPage/> } /> */}
            </Routes>
        </BrowserRouter>
    )
}