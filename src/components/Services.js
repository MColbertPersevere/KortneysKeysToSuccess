import React from 'react'
import ServiceCards from './ServiceCards'
import img from '../../public/imgs/IMG_1147.jpg'
import Slide from 'react-reveal/Slide'
import { NavLink } from 'react-router-dom'

export default class Services extends React.Component {
    render(){
        return(
            <div> 
                <div className="container-fluid background-image">
                    <ServiceCards />
                </div>
                <Slide right>
                    <div className="container-fluid p-1">
                        <p className="display-4 responsive-header text-center mt-3">Are <span className="service-bold display-3 you-text">you</span> ready for the next step? </p>
                        <p className="lead text-center text">Please call or email me about pricing. Ask about Consent forms, Release forms, Instruction forms, and more!</p>
                        <img width="600" className="d-block mx-auto rounded img-fluid" src={img} />
                        <div className="text-center">
                        <NavLink to="/contact" className="btn btn-brown mt-4 text-center text">Contact</NavLink>
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
}