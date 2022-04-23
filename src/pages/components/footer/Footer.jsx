import React from 'react'
import * as classes from './Footer.module.scss'

export default function Footer() {
  return (
    <section className={classes.footer}>
    <div className={classes.footer__bg}>
        <div className={classes.footer__bg__container}>
            <div>
                <h2>Gamza</h2>
                <p>Frontend developer</p>
            </div>

            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <p>&#169; Gamza. All rights reserved</p>
        </div>
    </div>
</section>
  )
}
