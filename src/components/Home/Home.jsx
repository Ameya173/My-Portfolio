import React from 'react'
import { BsGithub, BsLink, BsLinkedin, BsMedium } from 'react-icons/bs'
import ME from '/3.jpg'
import './Home.css'
const Home = () => {
  return (
    <header id='home'>
        <div className="container home_container">
        <h5>Hello, I'm</h5>
        <h1>Ameya Girkar</h1>
        <h5 className='text-light'>Full Stack Software Engineer</h5>
        <div className='cta'>
            <a href="" download className='btn'>
                Download CV</a> 
                <a href="contact" download className='btn btn-primary'>
                Contact Me</a> 
        </div>
        <div className="home_social">
            <a href="">
                <BsLinkedin/>
            </a>
            <a href="https://github.com/Ameya173">
                <BsGithub/>
            </a>
            <a href="">
                <BsMedium/>
            </a>
        </div>
        <div className="me">
            <img src={ME} alt="Ameya" />
        </div>
            <a href="/contact" className='scroll_down'>
            Scroll Down
            </a>
        </div>
    </header>
  )
}

export default Home