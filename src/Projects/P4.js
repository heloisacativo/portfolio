import React from "react";
import "../Projects/P4.css";
import ImgProject4 from "../assets/imgs/project-4.png";
import ImgHomeScreen from "../assets/projects/P4/main-screen.png";
import ImgHomeBody from "../assets/projects/P4/main-body.png";
import ImgGallery from "../assets/projects/P4/galery-screen.png";
import ImgPrice from "../assets/projects/P4/price-screen.png";
import ImgWChoosesUs from "../assets/projects/P4/wchoosesu-screen.png";
import ImgThanks from "../assets/projects/P4/thanks-screen.png";
import ProjectsNavigation from "../ProjectsNavigation/ProjectsNavigation";
import Footer from "../Footer/Footer";

const P4 = () => {
    return (
    <>
    <ProjectsNavigation/>

   
        <div className="descriptionProject4">
            <h1>ForksTravel</h1>
            <p>Criei esse site pra uma apresentação no meu curso de Inglês</p>
            <div className="imgProject4">
            <img src={ImgProject4} alt="Imagem do Projeto 4"/>
            </div>
       </div>
       <div className="mainProject">
       <img src={ImgHomeScreen} alt="Imagem da Página Inicial"/>
       </div>
       <div className="screenBody">
       <div className="screenHomeBody">
       <img src={ImgHomeBody} alt="Imagem do Corpo da Página Inicial"/>        
       </div>
       <div className="screenProject4">  
            <div className="screenGallery">
            <img src={ImgGallery} alt="Imagem da Galeria do Site"/>
            </div>
            <div className="priceScreen">
            <img src={ImgPrice} alt="Imagem do preço"/>
            </div>
            <div className="wchooseuScreen">
            <img src={ImgWChoosesUs} alt="Imagem do Por que nos escolher"/>
            </div>
            <div className="thanksScreen">
            <img src={ImgThanks} alt="Imagem do agradecimento"/>
           </div>
        </div>
      </div>
      <Footer/>
    </>
    )
}

export default P4;