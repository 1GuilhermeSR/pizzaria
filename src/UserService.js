
export default class UserService{

    usuarioAutenticado () {
        return localStorage.getItem("token") != undefined ? true : false
    }

    definirUsuario(usuario){
        localStorage.setItem("usuario", usuario.email)
        localStorage.setItem("token", usuario.email)
    }

}
