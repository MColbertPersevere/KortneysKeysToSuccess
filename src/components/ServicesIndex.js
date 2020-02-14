import React from 'react'
import serviceImg from '../../public/imgs/kortney_class.png'
import { NavLink } from 'react-router-dom'

const ServicesIndex = (props) => (
    <div>
        <div className="container-fluid p-2 background-brown">
            <h2 className="display-3 responsive-header text-center text-white">Services</h2>
            <div className="row p-2 mt-4 mx-auto row-index">
                <div className="col-md">
                    <p className="lead responsive-text text-white mt-5 text-center">I offer a group class program that includes tutoring services, one-on-one mentorship, and an etiquette class. I also create logos, flyers, resumes, business cards, reference and appeal letters. Ask about consent forms, instruction forms, and more. For further information about services or to submit your resume, please e-mail <u>k.corlew@yahoo.com</u>.</p>
                    
                    <NavLink to="/services" className="btn btn-lg btn-outline-light ser-btn mt-4 d-block text size-btn">Services</NavLink>
                </div>
                <div className="col-md">
                    <img className="img-fluid rounded ap-pic-2 mt-5 p-2 respond" src={serviceImg} />
                </div>
            </div>
        </div>
    </div>
)

export default ServicesIndex