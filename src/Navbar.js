import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProtectedPages from './ProtectedPages';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Produto from './components/Produto';
import Categorias from './components/Categorias';
import Subcategorias from './components/Subcategorias';
import Cupons from './components/Cupons';
import Configuracao from './components/Configuracao';
import CadastroProduto from './components/layout/CadastroProduto';
function Navbar(){
    return(
        <Router>
            <Routes>
                <Route path="/*" element={<Login/>}/>
                <Route path="/inicio" element={
                    <ProtectedPages>
                        <Inicio/>
                    </ProtectedPages>
                }/>
                <Route path="/produto" element={
                    <ProtectedPages>
                        <Produto/>
                    </ProtectedPages>
                }/>
                <Route path="/categoria" element={<ProtectedPages><Categorias/></ProtectedPages>}/>
                <Route path="/subcategoria" element={<ProtectedPages><Subcategorias/></ProtectedPages>}/>
                <Route path="/cupom" element={<ProtectedPages><Cupons/></ProtectedPages>}/>
                <Route path="/configuracao" element={<ProtectedPages><Configuracao/></ProtectedPages>}/>
                <Route path="/cadastroProduto" element={<ProtectedPages><CadastroProduto/></ProtectedPages>}/>
            </Routes>
        </Router>
    )
}

export default Navbar;