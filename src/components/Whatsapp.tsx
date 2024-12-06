import React from 'react'
import whatsappImagem from '../assets/whatsapp.png'
import '../styles/Whatsapp.css'

function Whatsapp() {
  return (
    <div className='whats'>
            <a href="https://wa.me/5512981858682" target="_blank">
                <img src={whatsappImagem} alt="whatsapp" />
            </a>
    </div>
  )
}

export default Whatsapp
