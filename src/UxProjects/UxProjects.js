import React from "react";
import ImgProjeto1 from "../assets/imgs/project-1.png";
import ImgProjeto2 from "../assets/imgs/project-2.jpg";
import ImgProjeto3 from "../assets/imgs/project-3.jpg";
import { Link } from "react-router-dom";
import ProjectsNavigation from "../ProjectsNavigation/ProjectsNavigation";
import "../Main/MediaQueries.css";
import Footer from "../Footer/Footer";

const UxProjects = () =>{
    
    return (
        <>
        <ProjectsNavigation/>

        <div className="portfolioContainer">
        <div className="projectsList">
                <Link to="/projects/project-1"  className="cards">
                    <div className="cards card1">
                        <img src={ImgProjeto1} alt="Projeto 1"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>VetWise</h2>
                        <p>Ux</p>
                        </div>             
                        </div>
                    </div>
                </Link>
            
                <Link to="/projects/project-2" className="cards">                
                    <div className="cards card2">
                        <img src={ImgProjeto2} alt="Projeto 2"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>LineNY</h2>
                        <p>Ux, Sharpen Challenge</p>
                        </div>
                        /</div>
                    </div>
                </Link>

                <Link to="/projects/project-3" className="cards">
                    <div className="cards card3">
                        <img src={ImgProjeto3} alt="Projeto 3"/>
                        <div className="overlayCard">
                        <div className="descriptionCard">
                        <h2>KIDDO</h2>
                        <p>Ux</p>
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


export default UxProjects;