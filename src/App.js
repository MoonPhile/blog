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
                <li>React</li>
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
              <li>React</li>
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

      <Tablet>
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
                <li>React</li>
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
      <div className='portfolio'>
        <span>
          요 아래에다 포트폴리오 자랑할거 쓸거임
        </span>
        <span className='title'>Portfolio</span>
        <ol className='portfolio_list'>
          <li>
            <div className='img_area'>
              <img src="img/logo512.png" />
            </div>
            <div className='portfolio_content'>
              <h3 className='porfolio_num'>01</h3>
              <span>
                이안에 포트폴리오 소개가 들어갑니다<br/>
                이런걸 만들었고<br/>
                왜 만들었고<br/>
                뭘로 만들었고<br/>
              </span>
              <button src="#">이쯤에 깃허브링크</button>
            </div>
          </li>
        </ol>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
