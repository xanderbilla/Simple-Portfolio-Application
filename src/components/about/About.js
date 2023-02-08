import React from 'react'
import './about.css';
// import Award from '../../img/me.png'

const About = () => {
  return (
      <div className='about'>
          <div className="about-left">
              <div className="about-card bg"></div>
              <div className="about-card">
                  <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg" alt="" className="about-img" />
              </div>
          </div>
          <div className="about-right">
              <h1 className="about-title">About Me</h1>
              <p className="about-sub">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime officia ducimus molestiae quasi atque..</p>
              <p className="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius atque odit perspiciatis sapiente ducimus, iure doloribus, cumque officia dolores similique beatae corporis voluptas, magni neque nihil? Alias, facilis veniam.</p>
          
          <div className="about-award">
              {/* <img src={Award} alt="" className="about-award-img" /> */}
              <div className="about-award-texts">
                  <h4 className="about-award-title">International Design</h4>
                      <p className="about-award-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati illo deleniti similique. Beatae, quibusdam accusantium pariatur porro nisi facere?</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default About