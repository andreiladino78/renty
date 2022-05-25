import React from 'react';
import FloatingWhatsApp from 'react-floating-whatsapp';
import avatar from '../asesor.png'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          rent it!
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            
            <li>
              <a href='#contact' className='page-scroll'>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
        <FloatingWhatsApp
      phoneNumber='+573057061028'
      accountName='Servicio al cliente'
      statusMessage='Generalmente responde en unos minutos'
      chatMessage='Buen día, ¿te puedo ayudar?'
      allowClickAway
      avatar={avatar}
      notification
      notificationSound
      notificationDelay={30000}
      darkMode
      placeholder='Escribe un mensaje'
      defaultMessage={`Buen día`}
    />
      </div>
      
    </nav>
  )
}
