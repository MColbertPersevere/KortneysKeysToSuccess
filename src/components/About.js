import React from 'react'
import AboutHeader from './AboutHeader'
import AboutKortney from './AboutKortney'
import AboutEducation from './AboutEducation'
import AboutExperience from './AboutExperience'
import Slide from 'react-reveal/Slide'

export default class About extends React.Component {
    render(){
        return (
            <div>
                <div className="container-fluid rounded background-image">
                <div className="image-overlay">
                <Slide left>
                    <AboutHeader />
                </Slide>
                </div>
                </div>
                <div className="container-fluid rounded bg-white p-5">
                <Slide right>
                    <AboutKortney />
                </Slide>
                    <div className="row justify-content-center">
                        <div className="card-deck row-index mt-5 p-2">
                            <Slide left>
                                <div className="card">
                                <AboutEducation />
                                </div>
                            </Slide>
                            <Slide right>   
                            <div className="card">
                            <AboutExperience />
                            </div>
                            </Slide> 
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}