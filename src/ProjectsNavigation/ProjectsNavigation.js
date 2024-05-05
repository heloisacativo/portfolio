import React from "react";
import { Link } from "react-router-dom";
import "../ProjectsNavigation/MediaQueries.css";
import { useEffect } from "react";
import { useState } from "react";


const ProjectsNavigation = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === "/") {
            setSelectedOption(1);
        } else if (currentPath === "/uxProjects") {
            setSelectedOption(2);
        } else if (currentPath === "/frontendProjects") {
            setSelectedOption(3);
        }
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    return (
        
        <div className="navigationContainer">
        <ul>
                 <li>
                    <Link to="/" className={`no-underline ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => handleOptionClick('Todos')}>
                        <span >Todos</span>
                    </Link>
                </li> 
                <li>
                    <Link to="/uxProjects" className={`no-underline ${selectedOption === 2 ? 'selected' : ''}`} onClick={() => handleOptionClick('User Experience')}>
                        <span>User Experience</span>
                    </Link>
                </li>   
                <li >
                    <Link to="/frontendProjects" className={`no-underline ${selectedOption === 3 ? 'selected' : ''}`} onClick={() => handleOptionClick('Front-End')}>
                        <span>Front-End</span>
                    </Link>
                
                </li>             
            </ul>
        </div>
    )
}


export default ProjectsNavigation;