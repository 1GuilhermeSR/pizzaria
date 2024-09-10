import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProtectedPages from './ProtectedPages';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Produto from './components/Produto';
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
                <Route path="/produto" element={
                    <ProtectedPages>
                        <Produto/>
                    </ProtectedPages>
                }/>
                <Route path="/produto" element={<Produto/>}/>
            </Routes>
        </Router>
    )
}

export default Navbar;