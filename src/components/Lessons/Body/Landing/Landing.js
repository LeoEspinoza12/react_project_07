import React from 'react'
import Fragment from '../../../../UI/Fragment'
import {Link} from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <Fragment>
        <div className="jumbotron Landing">
          <h1 className="display-4">Welcome to your lesson.</h1>
          <p className="lead">Nostrum laudantium error repudiandae aspernatur, eligendi tenetur. Iure optio autem quidem assumenda quam eligendi est expedita! Id, laudantium voluptates debitis quod doloribus inventore.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Link 
              className="btn btn-primary btn-md"
              to='/'>Go to Home</Link>
          </p>
        </div>
    </Fragment>
  )
}

export default Landing
