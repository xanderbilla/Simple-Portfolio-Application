import React from 'react'
import './project.css';
const Project = ({ img, link}) => {
  return (
      <div className='project'>
        <div className="project-browser">
            <div className="project-circle"></div>
            <div className="project-circle"></div>
            <div className="project-circle"></div>
          </div>
          <a href={link} target="_blank" rel="noreferrer">
              <img src={img} alt="" className="project-img" />
          </a>
    </div>
  )
}

export default Project;