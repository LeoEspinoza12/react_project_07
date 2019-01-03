import React from 'react'
import Fragment from '../../../../UI/Fragment'
import languageData from '../../../../UI/Language'
import './LessonsNav.css'

const LessonsNav = (props) => {

  let dataItems = languageData(props.lang)
  let topics = dataItems[1].map((item, i)=>{
      return (
          <li 
            className="list-group-item"
            key={i}
            onClick={()=>props.click(props.lang, i)}>{item.lessons}</li>
      )
  })
        

        
  return (
    <Fragment>
      <div className="list-group LessonsNav">
        <ul>
          {topics}
        </ul>
      </div>
    </Fragment>
  )
}

export default LessonsNav