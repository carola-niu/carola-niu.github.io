import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    navBar,
    mainBody,
    about,
    skills,
    reachOut,
    } from './some-stuff/config.js';
import MainBody from './components/home/MainBody'; 
import AboutMe from './components/home/AboutMe';
import ReachOut from './components/home/ReachOut';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Skills from './components/home/Skills';


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
