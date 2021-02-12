import React, { useState } from 'react';

import { FaBars, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import logoImg from '../../assets/logo.png';
import './Navbar.css';

const NavbarComponent: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="navArea">
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="logo">
          <Link to={'/dashboard'}>
            <img src={logoImg} alt="logo da imagem" />
          </Link>
        </div>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className="Social">
              <div className="SocialItem">
                <a href="https://github.com/diego15055" target="blank">
                  <FaGithub />
                </a>
              </div>
              <div className="SocialItem">
                <a
                  href="https://www.linkedin.com/in/diego-santos-3ab2a3156/"
                  target="blank"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default NavbarComponent;
