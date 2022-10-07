import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TelaLogin } from "../pages/TelaLogin"
import { Home } from "../pages/Home"
import { TelaCadastro } from "../pages/TelaCadastro"
import { SplashPage } from "../pages/SplashPage"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<TelaLogin />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cadastroUsu' element={<TelaCadastro />} />
                <Route path='/' element={<SplashPage />} />
            </Routes>
        </BrowserRouter>
    )
}