import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Fragment from '../../../UI/Fragment'
import './Sidebar.css'

class Sidebar extends Component {

click=(lang)=>{
  this.props.history.push('/lessons/' + lang)
}
render(){

  let lang = this.props.lang.map((lang, i)=>{
      if(lang === 'Home'){
        return <li className="list-group-item" key={i}>
                  <Link to='/'>{lang}</Link>
                </li>
      }
      return  <li 
                className="list-group-item" 
                key={i}
                onClick={()=>this.click(lang)}>{lang}
              </li>
    })
    return (
      <Fragment>
        <div className="col-sm-4 Sidebar">
          <ul className="list-group">
            {lang}
          </ul>
        </div>
    </Fragment>
  )
}
}

export default withRouter(Sidebar)