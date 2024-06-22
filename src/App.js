import React from 'react';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import UxProjects from './UxProjects/UxProjects';
import FrontEnd from './FrontEnd/FrontEnd';
import AboutMe from './About/About';
import P4 from './Projects/P4';
import P3 from './Projects/P3';
import P2 from './Projects/P2';
import P1 from './Projects/P1';
import MenuNavigation from './MenuNavigation/MenuNavigation';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <MenuNavigation/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/uxProjects' element={<UxProjects/>}/>
          <Route path='/frontendProjects' element={<FrontEnd/>}/>
          <Route path='/aboutMe' element={<AboutMe/>}/>
          <Route path='/projects/vetWise' element={<P1/>}/>
          <Route path='/projects/lineNy' element={<P2/>}/>
          <Route path='/projects/kiddo' element={<P3/>}/>
          <Route path='/projects/forksTravel' element={<P4/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
