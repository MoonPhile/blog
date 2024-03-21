/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
 
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

function App() {


  return (
    <div className="App">
      <div className='top-nav'>
        <h3>이제희 PORTFOLIO.</h3>
      </div>
      <Desktop>
      <div className='skills'>
        <span className='title'>Skills</span>
        <ul className='skill-list'>
          <li>Back-end
            <ul >
              <li>JAVA</li>
              <li>Spring Framework</li>
              <li>Spring Boot</li>
            </ul>
          </li>
          <li>Front-end
            <ul>
              <li>HTML5</li>
              <li>css3</li>
              <li>Javascript</li>
              <li>react</li>
            </ul>
          </li>
          <li>Database
            <ul>
              <li>Mysql</li>
              <li>oracle</li>
            </ul>
          </li>
          <li>ETC
            <ul>
              <li>AWS</li>
              <li>Linux</li>
            </ul>
          </li>
        </ul>
      </div>
      </Desktop>
      <Mobile><div className='skills'>
        <span className='title'>Skills</span>
        <ul className='skill-list-mobile'>
          <li>Back-end
            <ul >
              <li>JAVA</li>
              <li>Spring Framework</li>
              <li>Spring Boot</li>
            </ul>
          </li>
          <li>Front-end
            <ul>
              <li>HTML5</li>
              <li>css3</li>
              <li>Javascript</li>
              <li>react</li>
            </ul>
          </li>
          <li>Database
            <ul>
              <li>Mysql</li>
              <li>oracle</li>
            </ul>
          </li>
          <li>ETC
            <ul>
              <li>AWS</li>
              <li>Linux</li>
            </ul>
          </li>
        </ul>
      </div></Mobile>
      
    <Tablet>     <div className='skills'>
        <span className='title'>Skills</span>
        <ul className='skill-list'>
          <li>Back-end
            <ul >
              <li>JAVA</li>
              <li>Spring Framework</li>
              <li>Spring Boot</li>
            </ul>
          </li>
          <li>Front-end
            <ul>
              <li>HTML5</li>
              <li>css3</li>
              <li>Javascript</li>
              <li>react</li>
            </ul>
          </li>
          <li>Database
            <ul>
              <li>Mysql</li>
              <li>oracle</li>
            </ul>
          </li>
          <li>ETC
            <ul>
              <li>AWS</li>
              <li>Linux</li>
            </ul>
          </li>
        </ul>
      </div></Tablet>
      <span>
        skill outs 요 아래에다 포트폴리오 자랑할거 쓸거임
      </span>
      <div>


    <Default>Not mobile (desktop or laptop or tablet)</Default>
  </div>
    </div>
  );
}

export default App;
