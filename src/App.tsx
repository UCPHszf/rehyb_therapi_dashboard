import React from 'react';
import {useRoutes} from 'react-router-dom';
import routesMap from './route';
import NavBar from "./components/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
    const routes = useRoutes(routesMap);

    const nav_col_style = {
        paddingLeft: "60px",
        paddingTop: "30px",
    }

    const nav_items_style = {
        marginTop: "58px",
    }
    return (
        <div className="row">
            <div style={nav_col_style} className="col">
                <div className="nav-title">
                    Rehyb
                </div>
                <div style={nav_items_style}>
                    <NavBar/>
                </div>
            </div>
            <div className="col">
                {routes}
            </div>
        </div>
    );
}

export default App;
