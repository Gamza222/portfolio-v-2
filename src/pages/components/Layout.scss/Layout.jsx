import React, { useState } from 'react'
import Header from '../header/Header'
import '../../index.scss'

export default function Layout({children}) {
  const [dark, setDark] = useState(false);
  console.log(dark);
  
if (typeof document !== `undefined`) {
  if (dark == true) {
    ducument.body.classList.add('dark-theme')
  } else if (dark == false) {
    ducument.body.classList.remove('dark-theme')
  }
} 

  

  return (
    <div>
        <Header setDark={setDark} dark={dark} />
        {
            children
        }
    </div>
  )
}
