import React from "react";
import {NavLink} from "react-router-dom";

function MyNavLink(props: any) {
    const {to, normalSvg, activeSvg, children, active, onClick} = props;
    const navItemStyle = {
        display: "flex",
    }

    function computedClass(active: boolean) {
        return active ? "list-group-item nav-block active" : "list-group-item border-0 nav-block";
    }

    return (
        <div className={computedClass(active)} style={navItemStyle}>
            {active ? activeSvg : normalSvg}
            <NavLink to={to} onClick={onClick}>{children}</NavLink>
        </div>
    )
}

export default MyNavLink;