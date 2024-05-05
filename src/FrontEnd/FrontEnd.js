import React from "react";
import ImgProject4 from "../assets/imgs/project-4.png";
import { Link } from "react-router-dom";
import "../Main/MediaQueries.css";
import ProjectsNavigation from "../ProjectsNavigation/ProjectsNavigation";
import Footer from "../Footer/Footer";

const FrontEnd = () => {
    return (
        <>
        <ProjectsNavigation/>
        <div className="portfolioContainer">
        <div className="projectsList">
                <Link to="/projects/project-4" className="cards">
                    <div className="cards card3">
                        <img src={ImgProject4} alt="Projeto 4"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>Forks Travel</h2>
                        <p>Front-End (Html, JavaScript)</p>
                        </div>
                        </div>
                    </div>
                </Link>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default FrontEnd;