import React from 'react'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import * as classes from './Home.module.scss'
import Gamza1 from '../../../images/gamza1.jpg'
import { AiOutlineMessage, AiOutlineArrowDown } from 'react-icons/ai'
import { CgMouse } from 'react-icons/cg'


export default function Home() {
  return (
    <section className={classes.home} id="home">
        <div className={classes.home__container}>
            <div className={classes.home__container__content}>
                <div className={classes.home__container__content__socials}>
                    <a href="" className={classes.home__container__content__socials__icon} target="_blank">
                        <AiOutlineLinkedin /> 
                    </a>
                    <a href="" className={classes.home__container__content__socials__icon} target="_blank">
                        < AiOutlineGithub />
                    </a>
                </div>
                <div className={classes.home__container__content__img} />
                <div className={classes.home__container__content__data}>
                    <h1>Hi, I'm Gamza</h1>
                    <h3>Frontend developer</h3>
                    <p>High level experience in web development knowledge,<br /> producing qualified work.</p>
                    <a href="#contact">
                        Contact Me 
                        <AiOutlineMessage />
                    </a>
                </div>
            </div>

            <div className={classes.home__container__scroll}>
                <a href="#about">
                    <CgMouse/>
                    <span>Scroll down</span>
                    <AiOutlineArrowDown />
                </a>
            </div>
        </div>
    </section>
  )
}
