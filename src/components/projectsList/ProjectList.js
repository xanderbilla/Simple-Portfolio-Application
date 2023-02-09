import React from 'react'
import Project from '../projects/Project'
import './projectList.css'
import { products } from '../../Data'

const ProjectList = () => {
  return (
    <div className='projectList'>
      <div className="projectList-texts">
        <h1 className="projectList-title">Create & Inspire. It's Xander</h1>
        <p className="projectList-desc"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non soluta esse doloremque magnam dolor quisquam nemo molestiae asperiores exercitationem omnis sapiente deserunt quibusdam, natus, maiores ex dignissimos quia repudiandae?</span></p>
      </div>
      <div className="projectList-list">
        {
          products.map((item) => (
            <Project key={item.id} img={item.img} link={item.link}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectList;