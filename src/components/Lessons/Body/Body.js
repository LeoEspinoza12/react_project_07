import React, {Component} from 'react'
import Fragment from '../../../UI/Fragment'
import Landing from './Landing/Landing'
import LessonsNav from './LessonsNav/LessonsNav'
import LessonsTopic from './LessonsTopic/LessonsTopic'

import './Body.css'

class Body extends Component {

  render(){

    let lang = this.props.match.params

    let body = null
    if(this.props.match.path === '/lessons/:lang'){
      body = <Fragment>
                <LessonsNav lang={lang.lang}/>
                <LessonsTopic />
             </Fragment>
    } else {
      body = <Landing />
    }
    return (
      
      <Fragment>
        <div className="col-sm-8 Body">
          {body}
        </div>
      </Fragment>
    )
  }
}

export default Body
