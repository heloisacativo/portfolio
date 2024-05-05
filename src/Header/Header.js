import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./MediaQueries.css";

const Header = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === "/") {
            setSelectedOption(1);
        } else if (currentPath === "/aboutme") {
            setSelectedOption(2);
        }
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option === selectedOption ? null : option);

    };
    return (
        <div className="header">
            <nav className="headerNavigation">   
            <ul>
                 <li>
                    <Link to="/" className={`no-underline ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => handleOptionClick('Portfólio')}>
                        <span>Portfólio</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/aboutme" className={`no-underline ${selectedOption === 2 ? 'selected' : ''}`} onClick={() => handleOptionClick('Sobre mim') }>
                        <span>Sobre mim</span>
                    </Link>
                </li>                
            </ul>
        </nav>
        </div>
    )
}

export default Header;