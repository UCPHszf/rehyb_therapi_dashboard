import Communication from "../pages/Communication";
import Exoskeleton from "../pages/Exoskeleton";
import Overview from "../pages/Overview";
import Patients from "../pages/Patients";
import {Navigate} from "react-router-dom";

const routes = [
    {
        path: "/communication",
        element: <Communication/>,
    },
    {
        path: "/exoskeleton",
        element: <Exoskeleton/>
    },
    {
        path: "/overview",
        element: <Overview/>
    },
    {
        path: "/patients",
        element: <Patients/>
    },
    {
        path: "/",
        element: <Navigate to="/overview"/>
    }
]

export default routes;