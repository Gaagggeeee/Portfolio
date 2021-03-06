import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// PAGES
import Header from './components/pages/header';
import Home from './components/pages/home';
import Work from './components/pages/work';
import Footer from './components/pages/footer';

function App() {

  const [bgOne, setBgOne] = useState("bgOne")

    const listenScrollEvent = (event) => {
    if (window.scrollY < 750) {
        return setBgOne("bgOne")
    } else if (window.scrollY > 750) {
        return setBgOne("bgTwo")
    } 
    }

    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);



  return (
    <>
      <Router>
        <div className='app-outer'>
          <div className='app'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Work} />
          </Switch>
          <Footer />
          <div className='left-social-container'>
              <ul className='header-social-list'>
                <li>
                    <a className='header-social' href='https://github.com/Gaagggeeee'>
                        <svg 
                          enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><title>Github</title><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
                        </svg>
                    </a>
                  </li>
                <li>
                                          <a className='header-social' href='https://codepen.io/Gaagggeeee'>
                                              <svg 
                                                  id="regular" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><title>Codepen</title><path d="m24 7.598c-.044-.264-.08-.47-.36-.641-11.449-6.791-11.287-7.297-12.03-6.848-8.677 5.394-11.092 6.597-11.439 7.017-.315.323-.171.818-.171 8.298-.021.851 7.743 5.462 11.519 8.404.333.237.752.199 1.003-.029 11.224-7.956 11.497-7.636 11.478-8.375 0 0-.012-7.927 0-7.826zm-1.5 6.491-3.876-2.359 3.876-2.697zm-5.277-3.212-4.473-2.722v-6.07l9.126 5.555zm-5.223 3.633-3.876-2.697 3.876-2.359 3.876 2.359zm-.75-12.426v6.074c-1.739 1.079-3.209 1.98-4.451 2.734l-4.675-3.252zm-5.857 9.658c-1.874 1.127-3.098 1.843-3.893 2.32v-5.029zm1.33.924 4.527 3.149v5.999l-9.126-6.349zm6.027 9.149v-5.999l4.527-3.149 4.599 2.799z"/>
                                              </svg>
                                          </a>
                                      </li>
                <li>
                                          <a className='header-social' href='https://www.linkedin.com/in/robert-everett-2811a91b9/'>
                                              <svg 
                                                  height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><title>Linkedin</title><path d="m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0"/>
                                              </svg>
                                          </a>
                                      </li>
                <li>
                                          <a className='header-social' href='https://www.instagram.com/gaagggeeee/'>
                                              <svg 
                                                  height="512pt" viewBox="0 0 512 512.00006" width="512pt" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="m261.039062 512c-1.695312 0-3.390624 0-5.097656-.007812-40.132812.097656-77.214844-.921876-113.277344-3.117188-33.0625-2.011719-63.242187-13.4375-87.28125-33.039062-23.195312-18.914063-39.035156-44.488282-47.078124-76.003907-7-27.4375-7.371094-54.371093-7.726563-80.421875-.257813-18.691406-.5234375-40.839844-.578125-63.363281.0546875-22.617187.320312-44.765625.578125-63.457031.355469-26.046875.726563-52.980469 7.726563-80.421875 8.042968-31.515625 23.882812-57.089844 47.078124-76.003907 24.039063-19.601562 54.21875-31.027343 87.285157-33.039062 36.0625-2.191406 73.152343-3.2148438 113.371093-3.1171875 40.144532-.0859375 77.214844.9257815 113.277344 3.1171875 33.0625 2.011719 63.242188 13.4375 87.28125 33.039062 23.199219 18.914063 39.035156 44.488282 47.078125 76.003907 7 27.4375 7.371094 54.375 7.726563 80.421875.257812 18.691406.527344 40.839844.578125 63.363281v.09375c-.050781 22.523437-.320313 44.671875-.578125 63.363281-.355469 26.046875-.722656 52.980469-7.726563 80.421875-8.042969 31.515625-23.878906 57.089844-47.078125 76.003907-24.039062 19.601562-54.21875 31.027343-87.28125 33.039062-34.535156 2.101562-70.011718 3.125-108.277344 3.125zm-5.097656-40.007812c39.480469.09375 75.730469-.902344 110.945313-3.042969 25-1.519531 46.675781-9.632813 64.433593-24.113281 16.414063-13.386719 27.71875-31.855469 33.597657-54.894532 5.828125-22.839844 6.164062-47.363281 6.488281-71.078125.253906-18.566406.519531-40.558593.574219-62.863281-.054688-22.308594-.320313-44.296875-.574219-62.863281-.324219-23.714844-.660156-48.238281-6.488281-71.082031-5.878907-23.039063-17.183594-41.507813-33.597657-54.894532-17.757812-14.476562-39.433593-22.589844-64.433593-24.109375-35.214844-2.144531-71.464844-3.132812-110.851563-3.046875-39.472656-.09375-75.726562.902344-110.941406 3.046875-25 1.519531-46.675781 9.632813-64.433594 24.109375-16.414062 13.386719-27.71875 31.855469-33.597656 54.894532-5.828125 22.84375-6.164062 47.363281-6.488281 71.082031-.253907 18.582031-.519531 40.585937-.574219 62.910156.054688 22.226563.320312 44.234375.574219 62.816406.324219 23.714844.660156 48.238281 6.488281 71.078125 5.878906 23.039063 17.183594 41.507813 33.597656 54.894532 17.757813 14.476562 39.433594 22.589843 64.433594 24.109374 35.214844 2.144532 71.476562 3.144532 110.847656 3.046876zm-.953125-90.992188c-68.921875 0-125-56.074219-125-125s56.078125-125 125-125c68.925781 0 125 56.074219 125 125s-56.074219 125-125 125zm0-210c-46.867187 0-85 38.132812-85 85s38.132813 85 85 85c46.871094 0 85-38.132812 85-85s-38.128906-85-85-85zm139-80c-16.566406 0-30 13.429688-30 30s13.433594 30 30 30c16.570313 0 30-13.429688 30-30s-13.429687-30-30-30zm0 0"/>
                                              </svg>
                                          </a>
                                      </li>
                <li>
                                          <a className='header-social' href='mailto:rgeverett34@gmail.com'>
                                              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                                  viewBox="0 0 512 512" >
                                                  <g>
                                                      <g> <title>Email</title>
                                                          <path d="M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121
                                                              C512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18
                                                              s-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894z
                                                              M51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939
                                                              l22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z"/>
                                                      </g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                                  <g>
                                                  </g>
                                              </svg>
                                          </a>
                                      </li>
              </ul>
            </div>
          <div className='right-social-container'>
            <div className='right-email-box'>
              <div className='right-email'>
                <a href='mailto:rgeverett34@gmail.com'>
                  Rgeverett34@gmail.com
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
