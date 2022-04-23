import React from 'react'
import * as classes from './Skills.module.scss'
import { BiCodeCurly } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

export default function Skills() {
  return (
    <section className={classes.skills} id="skills">
        <h2>Skills</h2>
        <p>My technical level</p>

        <div className={classes.skills__container}>
            <div className={classes.skills__container__header}>
                <BiCodeCurly />
              <div>
                <h2>Frontent development</h2>
                <p>More tham 3 years</p>
              </div>
            </div>
              <div className={`${classes.skills__list} ${classes.listOpen}`}>
                  <div className={`${classes.skills__list__data}`}>
                      <div className={classes.skills__list__data__title}>
                        <h3>HTML</h3>
                        <p>90%</p>
                      </div>
                      <div className={classes.skills__list__data__bar}>
                        <span className={classes.skills__list__data__bar__html}></span>
                      </div>
                  </div>
                  <div className={classes.skills__list__data}>
                      <div className={classes.skills__list__data__title}>
                        <h3>CSS/SCSS</h3>
                        <p>90%</p>
                      </div>
                      <div className={classes.skills__list__data__bar}>
                        <span className={classes.skills__list__data__bar__css}></span>
                      </div>
                  </div>
                  <div className={classes.skills__list__data}>
                      <div className={classes.skills__list__data__title}>
                        <h3>Javascript</h3>
                        <p>70%</p>
                      </div>
                      <div className={classes.skills__list__data__bar}>
                        <span className={classes.skills__list__data__bar__js}></span>
                      </div>
                  </div>
                  <div className={classes.skills__list__data}>
                      <div className={classes.skills__list__data__title}>
                        <h3>React/Redux</h3>
                        <p>80%</p>
                      </div>
                      <div className={classes.skills__list__data__bar}>
                        <span className={classes.skills__list__data__bar__react}></span>
                      </div>
                  </div>
                  <div className={classes.skills__list__data}>
                      <div className={classes.skills__list__data__title}>
                        <h3>Gatsby/GraphQL</h3>
                        <p>70%</p>
                      </div>
                      <div className={classes.skills__list__data__bar}>
                        <span className={classes.skills__list__data__bar__gatsby}></span>
                      </div>
                  </div>
              </div>
            </div>
    </section>
  )
}
