import UserService from "./UserService"
import Navbar from "./Navbar"

const userService = new UserService();

const ProtectedPages = ({children}) => {
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children : <Navbar/>
    }



export default ProtectedPages;