import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    navBar,
    mainBody,
    about,
    skills,
    reachOut,
    } from './some-stuff/config.js';
import MainBody from './components/home/MainBody.jsx'; 
import AboutMe from './components/home/AboutMe.jsx';
import ReachOut from './components/home/ReachOut.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Skills from './components/home/Skills.jsx';


const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        {reachOut.show && (
          <ReachOut
            heading={reachOut.heading}
            message={reachOut.message}
            email={reachOut.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
