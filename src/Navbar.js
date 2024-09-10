import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProtectedPages from './ProtectedPages';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Cadastro from './components/Cadastro';

function Navbar(){
    return(
        <Router>
            <Routes>
                <Route path="*" element={<Login/>}/>
                <Route path="/inicio" element={
                    <ProtectedPages>
                        <Inicio/>
                    </ProtectedPages>
                }/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
        </Router>
    )
}

export default Navbar;