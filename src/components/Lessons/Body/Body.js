import React, {Component} from 'react'
import Fragment from '../../../UI/Fragment'
import Landing from './Landing/Landing'
import LessonsNav from './LessonsNav/LessonsNav'
import LessonsTopic from './LessonsTopic/LessonsTopic'
import languageData from '../../../UI/Language'

import './Body.css'

class Body extends Component {

  state ={
    topic: null
  }

  clickHander = (lang, lessonNumber) => {
    let langData = languageData(lang)
    langData[1].map((lang, index)=>{
      if(index === lessonNumber){
        this.setState({topic: lang})
      }
      return true
    })
  }
  
  componentWillUnmount(){
    this.setState({topic: null})
  }
  render(){
    // let sampleData = new URLSearchParams(decodeURIComponent(this.props.location.search))
    //   for (let i of sampleData.entries()){
    //     console.log(i)
    //   }
    let lang = this.props.match.params
    let body = null
    if(this.props.match.path === '/lessons/:lang'){
      body = <Fragment>
                <LessonsNav 
                  lang={lang.lang}
                  click={this.clickHander}/>
                <LessonsTopic 
                  lang={lang.lang}
                  topic={this.state.topic}/>
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
