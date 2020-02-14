import React from 'react'
import AppearancesIndex from './AppearancesIndex'
import ServicesIndex from './ServicesIndex'
import MissionIndex from './MissionIndex'
import Fade from 'react-reveal/Fade'
import {Carousel} from 'react-bootstrap'
import pictureOne from '../../public/imgs/one.jpg'
import pictureTwo from '../../public/imgs/two.jpg'
import pictureThree from '../../public/imgs/three.jpeg'

export default class Index extends React.Component {
    render(){
        return (
            <div>
                <Fade right>
                <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pictureOne}
                        alt="Kortney's class"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pictureTwo}
                        alt="Learning material on white board"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={pictureThree}
                        alt="Incentives for students"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
                </Fade>
                <Fade left>
                    <AppearancesIndex />
                </Fade>
                <Fade right>
                    <ServicesIndex />
                </Fade>
                <Fade left>
                    <MissionIndex />
                </Fade>
            </div>
        )
    }
}