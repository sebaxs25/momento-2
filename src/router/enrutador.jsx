import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Principal from '../pages/Principal'

export let enrutador = [
    {
        path:"/",
        element:<Login/>
    },
    {
        path: "/registro",
        element:<Registro/>
    },
    {
        path:"/principal",
        element: <Principal/>
    }

]