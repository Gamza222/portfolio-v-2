import React from 'react'
import * as classes from './Portfolio.module.scss'
import markdown from '../../../images/markdown.jpg'
import todolist from '../../../images/todo-list.jpg'
import quotemachine from '../../../images/quote-machine.jpg'
import travel1 from '../../../images/travel1.jpg'
import travel2 from '../../../images/travel2.jpg'
import devsite from '../../../images/dev-site.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Portfolio() {
  return (
    <section className={classes.portfolio} id="portfolio">
      <h2>Portfolio</h2>
      <p>Most recent work</p>
      <div className={classes.portfolio__container}>
        <div className={classes.portfolio__container__content}>
          <img src={markdown} />

          <div className={classes.portfolio__data}>
              <h3>Markdown Previewer</h3>
              <a href="https://gamza222.github.io/markdown-preview/">
                  Demo
                  <AiOutlineArrowRight />
              </a>
          </div>
        </div>

        <div className={classes.portfolio__container__content}>
          <img src={devsite} />
          <div className={classes.portfolio__data}>
              <h3>Site for LabsForDevs Company</h3>
              <a href="https://www.labsfordevs.com/">
                  Demo
                  <AiOutlineArrowRight />
              </a>
          </div>
        </div>

        <div className={classes.portfolio__container__content}>
          <img src={todolist} />
          <div className={classes.portfolio__data}>
              <h3>To-Do List</h3>
              <a href="https://gamza222.github.io/Todo-App/">
                  Demo
                  <AiOutlineArrowRight />
              </a>
          </div>
        </div>

        <div className={classes.portfolio__container__content}>
          <img src={quotemachine} />
          <div className={classes.portfolio__data}>
              <h3>Quote Machine</h3>
              <a href="https://gamza222.github.io/Todo-App/">
                  Demo
                  <AiOutlineArrowRight />
              </a>
          </div>
        </div>

        <div className={classes.portfolio__container__content}>
          <img src={travel1} />
          <div className={classes.portfolio__data}>
              <h3>Travel Website</h3>
              <a href="https://gamza222.github.io/gatsby-travel-website-v1/">
                  Demo
                  <AiOutlineArrowRight />
              </a>
          </div>
        </div>

        <div className={classes.portfolio__container__content}>
          <img src={travel2} />
          <div className={classes.portfolio__data}>
              <h3>Travel Website</h3>
              <a href="https://gamza222.github.io/gatsby-travel-website-v2/">
                  Demo
                  <AiOutlineArrowRight />
              </a>
          </div>
        </div>
        
      </div>
    </section>
  )
}