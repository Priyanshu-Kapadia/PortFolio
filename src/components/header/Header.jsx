import React from 'react'
import CTA from './CTA'
import './header.css'
// import ME from '../../assets/me.png'
import ME from '../../assets/1_photo.png'
import HeaderSocials from './HeaderSocials'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import TypewriterComponent from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Priyanshu Kapadia</h1>
        {/* <h5 className="text-light">
        
          Fullstack Developer
        </h5> */}
        <TypewriterComponent 
          options={{
            strings: ['Full Stack Developer', 'Web3 Developer', 'Mobile Developer'],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 100,
            wrapperClassName: 'text-light',
            blink: true,
          }}
        />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>
          Scroll Down
          <div className='down'><BsFillArrowDownCircleFill /></div>
        </a>
      </div>
    </header>
  )
}

export default Header