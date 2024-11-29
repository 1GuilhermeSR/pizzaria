import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedPages from './ProtectedPages';
import Login from './components/pages/login/Login';
import Inicio from './components/pages/Inicio/Inicio';
import Produto from './components/pages/produtos/Produto';
import Categorias from './components/pages/categorias/Categorias';
import Cupons from './components/pages/cupons/Cupons';
import Configuracao from './components/pages/configuracoes/Configuracao';

function Navbar() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<Login />} />
                <Route path="/inicio" element={<ProtectedPages><Inicio /></ProtectedPages>} />
                <Route path="/produto" element={<ProtectedPages><Produto /></ProtectedPages>} />
                <Route path="/categoria" element={<ProtectedPages><Categorias /></ProtectedPages>} />
                <Route path="/cupom" element={<ProtectedPages><Cupons /></ProtectedPages>} />
                <Route path="/configuracao" element={<ProtectedPages><Configuracao /></ProtectedPages>} />
            </Routes>
        </Router>
    )
}

export default Navbar;