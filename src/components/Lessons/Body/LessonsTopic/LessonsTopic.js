import React from 'react'
import Fragment from '../../../../UI/Fragment'
import languageData from '../../../../UI/Language'

import './LessonsTopic.css'

const LessonsTopic = (props) => {

  
  let lessonsItems = null;

  if(props.topic){
    lessonsItems = <Fragment>
              <div className="card-header">{props.topic.featured}</div>
                <div className="card-body">
                  <h5 className="card-title">
                    {props.topic.title}</h5>
                  <p className="card-text">
                    {props.topic.topic}</p>
                  <a href="/" className="btn-sm btn-primary">     
                  {props.topic.home}</a>
                </div>
              </Fragment>
  } else {
    let description = languageData(props.lang)[0]
    lessonsItems = <div className="page-header">
                    <h1>{description.header}</h1>
                      <p>{description.description}</p>
                   </div>
  }

  return (
    <Fragment>
      <div className="card LessonsTopic">
        {lessonsItems}
      </div>
    </Fragment>
  )
}

export default LessonsTopic