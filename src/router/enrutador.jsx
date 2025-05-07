import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Principal from '../pages/Principal'
import Contacto from "../components/Contacto";
import Servicio from "../components/Servicio";
import AcercaDe from "../components/AcercaDe";

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
    },
    {
        path: "/contacto",
        element:<Contacto/>
    },
    {
        path: "/servicio",
        element:<Servicio/>
    },
    {
        path: "/acercade",
        element:<AcercaDe/>
    }


]