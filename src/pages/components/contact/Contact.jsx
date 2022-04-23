import React from 'react'
import * as classes from './Contact.module.scss'
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
  return (
    <section className={classes.contact} id="contact">
      <h2>Cotact Me</h2>
      <p>Get in touch</p>

      <div className={classes.contact__container}>
          <div>
            <div className={classes.contact__information}>
              <div>
                <AiOutlineWhatsApp />
                <h3>WhatsApp</h3>
                <p>+79685740730</p>
                <a target='_blank' href="https://wa.me/79685740730">Send Message</a>
              </div>
            </div>

            <div className={classes.contact__information}>
              <div>
                <AiOutlineMail />
                <h3>Email</h3>
                <p>gamza2003nani@mail.ru</p>
                <a target='_blank' href="mailto:gamza2003nani@mail.ru">Send Message</a>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}