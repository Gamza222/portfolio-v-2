import React, { useState } from 'react'
import * as classes from './Header.module.scss'
import { FaBriefcase } from 'react-icons/fa'
import { AiOutlinePicture } from 'react-icons/ai'
import { AiOutlineMessage } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineFileText } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineClose, AiOutlineAppstore } from 'react-icons/ai'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function Header({setDark, dark}) {
    const [toggle, setToggle] = useState(false);
    const [close, setClose] = useState(false);
    console.log(toggle)

  return (
    <header className={classes.header} id="header">
        <nav className={classes.nav}>
            <a href="#" className={classes.nav__logo}></a>
            <div className={`${classes.nav__menu} ${toggle ? classes.showMenu : ''}`} id="nav-menu">
                <ul className={classes.nav__menu__list}>
                    <li className={classes.nav__m_list__item}>
                        <a href="#" className={classes.nav__menu__list__item__link}><AiOutlineHome />Home</a>
                    </li>
                    <li className={classes.nav__menu__list__item}>
                        <a href="#about" className={classes.nav__menu__list__item__link}><AiOutlineUser />About</a>
                    </li>
                    <li className={classes.nav__menu__list__item}>
                        <a href="#skills" className={classes.nav__menu__list__item__link}><AiOutlineFileText />Skills</a>
                    </li>
                    <li className={classes.nav__menu__list__item}>
                        <a href="#servises" className={classes.nav__menu__list__item__link}><FaBriefcase />Services</a>
                    </li>
                    <li className={classes.nav__menu__list__item}>
                        <a href="#portfolio" className={classes.nav__menu__list__item__link}><AiOutlinePicture />Portfolio</a>
                    </li>
                    <li className={classes.nav__menu__list__item}>
                        <a href="#contact" className={classes.nav__menu__list__item__link}><AiOutlineMessage />ContactMe</a>
                    </li>
                </ul>
                <AiOutlineClose className={`${classes.nav__close}`} onClick={() => setToggle(!toggle)} id="nav-close" />
            </div>

            <div className={classes.nav}>
            <p>Gamza</p>
            
                <button onClick={() => setDark(!dark)}>{dark == true ? <FiSun /> : <FiMoon />}</button>
                <button className={`${classes.nav__toggle}`} onClick={() => setToggle(!toggle)} id="nav-toggle">
                    <AiOutlineAppstore />
                </button>
            </div>
        </nav>

    </header>
  )
}
