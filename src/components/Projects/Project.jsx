import React from 'react'
import './Project.css'
import Contact from '/contactme.jpg'
import Blog from '/mern.png'
import Book from '/fullstack.jpg'
const Project = () => {
  return (
    <section id='projects'>
        <h5>My Recent Works</h5>
        <h2>Projects</h2>
        <div className='container project_container'>
            <article className='project_item'>
                <div className="project_item_image">
                 <img src={Contact} alt="" />   
                 <h3>Contact MS</h3>
                 <small className='text-light'>MERN Stack</small>
                 <div className="project_item_btn">
                        <a href="" className='btn'>Github</a>
                 </div>
                </div>
            </article>
            <article className='project_item'>
                <div className="project_item_image">
                 <img src={Blog} alt="" />   
                 <h3>Blog MS</h3>
                 <small className='text-light'>MERN Stack</small>
                 <div className="project_item_btn">
                        <a href="" className='btn'>Github</a>
                 </div>
                </div>
            </article>
            <article className='project_item'>
                <div className="project_item_image">
                 <img src={Book} alt="" />   
                 <h3>Book MS</h3>
                 <small className='text-light'>MERN Stack</small>
                 <div className="project_item_btn">
                        <a href="" className='btn'>Github</a>
                 </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Project