import React from 'react'
import Fragment from '../../../../UI/Fragment'
import languageData from '../../../../UI/Language'
import './LessonsNav.css'

const LessonsNav = (props) => {

  let lang = props.lang


  return (
    <Fragment>
     <div className="list-group LessonsNav">
        <ul>
          <li className="list-group-item">Lesson One</li>
          <li className="list-group-item">Lesson Two</li>
          <li className="list-group-item">Lesson Three</li>
        </ul>
      </div>
    </Fragment>
  )
}

export default LessonsNav