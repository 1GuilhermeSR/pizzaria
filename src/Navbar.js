import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProtectedPages from './ProtectedPages';
import Login from './components/Login';
import Inicio from './components/Inicio';

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
            </Routes>
        </Router>
    )
}

export default Navbar;