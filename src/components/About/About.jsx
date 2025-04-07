import React from 'react'
import myImage from '/me2.jpg'
import { GiGraduateCap } from 'react-icons/gi'
import { TfiWorld } from 'react-icons/tfi'
import { BsTelephoneForward } from 'react-icons/bs'
import './About.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5> 
      <h2>About Me</h2> 
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me_image">
                <img src={myImage} alt="Ameya" />
            </div>  
        </div>
        <div className="about_content">
            <div className="aboutcards">
                < article className="about_card">
                    <GiGraduateCap className='about_icon'/>
                    <h5>Degree</h5>
                    <small>
                       Btech. Information Technology <br/>
                       <i>Mumbai University</i> 
                    </small>
                </article>
                < article className="about_card">
                    <TfiWorld className='about_icon'/>
                    <h5>Location</h5>
                    <small>
                     Sanpada,Navi Mumbai-400705,Maharastra.
                    </small>
                </article>
                
                < article className="about_card">
                    <BsTelephoneForward className='about_icon'/>
                    <h5>Contact</h5>
                    <small>
                        <ul>
                        <li>Phone:9136115444</li>
                        <li>Email:ameyagirkar1708@gmail.com</li>

                        </ul>
                    </small>
                </article>
            </div>
            <p>I’m Ameya Girkar, a passionate software developer with a strong foundation in Data Structures and Algorithms (DSA). I thrive on solving complex problems and optimizing solutions for efficiency. Skilled in MongoDB and backend development, I enjoy building scalable applications and constantly exploring new technologies to enhance my expertise. My goal is to create impactful software that makes a difference.</p>
        </div>
      </div>
    </section>
  )
}

export default About