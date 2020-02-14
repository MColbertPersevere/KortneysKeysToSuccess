import React from 'react'
import {Link} from "react-router-dom"
import img from '../../public/imgs/404.jpg'

const NotFound = (props) => (
    <div>
        <img className="img-fluid d-block mx-auto w-75" src={img} />
        <Link className="d-block mx-auto" to="/">Home</Link>
    </div>
)


export default NotFound