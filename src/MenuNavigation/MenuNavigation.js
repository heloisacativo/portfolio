import "../MenuNavigation/MenuNavigation.css";
import React, {useState} from "react";
import menuNav from "../assets/imgs/menu-nav.png";
import backIcon from "../assets/imgs/back-arrow.png";
import { Link } from "react-router-dom";

const MenuNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleNavMenu = () => {
        setShowMenu(!showMenu);
    };



    return (
        <div className="menuSidebarContainer">
            <img src={menuNav} alt="Menu Icon" onClick={toggleNavMenu} />
            {showMenu && (
                <div className="sidebarMenu">
                <img src={backIcon} alt="Icon Back" onClick={toggleNavMenu}/>
                <ul>
                    <li><Link to="/">Portfólio</Link></li>
                    <li><Link to="/aboutMe" >Sobre mim</Link></li> 
                </ul>
                 

                </div>
            )}
        </div>
    );
};

export default MenuNavigation;