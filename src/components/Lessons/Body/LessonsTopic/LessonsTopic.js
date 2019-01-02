import React from 'react'
import Fragment from '../../../../UI/Fragment'

import './LessonsTopic.css'

const LessonsTopic = (props) => {


  return (
    <Fragment>
      <div className="card LessonsTopic">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Lesson One</h5>
          <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, quas in. Explicabo tempore, debitis atque dolorum minima dolores accusantium velit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, eius consequatur ipsum vel quia nostrum inventore dolor, officiis voluptate perspiciatis illum mollitia fuga. Sint optio, ea similique atque sed nihil?</p>
          <a href="/" className="btn-sm btn-primary">Go somewhere</a>
        </div>
      </div>
    </Fragment>
  )
}

export default LessonsTopic