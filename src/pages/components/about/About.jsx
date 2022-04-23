import React from 'react'
import * as classes from './About.module.scss'
import Gamza2 from '../../../images/gamza2.jpg'
import { AiOutlineDownload } from 'react-icons/ai'

export default function About() {
  return (
    <section id="about" className={classes.about}>
        <h2 className={classes.about__title}>About Me</h2>
        <p>My Introduction</p>

        <div className={classes.about__container}>
            <img src={Gamza2} alt="Me" />
            <div>
            <p>
                    Web developer with extensive knwoledge and years of experience.
                    I'm ready to work in a team or by myself. Always keep in touch with client and 
                    to perform work properly.
            </p>
            <div className={classes.about__container__data}>
                <div className={classes.about__container__data__info}>
                    <span>03+</span>
                    <span>Years <br/> experience</span>
                </div>
                <div className={classes.about__container__data__info}>
                    <span>10+</span>
                    <span>Completed <br/> projects</span>
                </div>
                <div className={classes.about__container__data__info}>
                    <span>05+</span>
                    <span>Clients <br/> worked with</span>
                </div>
            </div>

            <div className={classes.about__container__buttons}>
                <a download="" href="">
                    Download CV
                    <AiOutlineDownload />
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}
