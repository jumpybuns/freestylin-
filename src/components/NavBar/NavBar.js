import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import styles from './NavBar.css';

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={styles.navbar}>
        <Link to="#" className={styles.menuBars}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? styles.navMenuActive : styles.navMenu}>
        <ul className={styles.navMenuItems}>
          <li className={styles.navbarToggle}>
            <Link to="#" className={styles.menuBars}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={index.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
