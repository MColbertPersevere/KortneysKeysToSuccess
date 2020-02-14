import React from 'react'
import img from '../../public/imgs/kortney.png'

const AboutHeader = (props) => (
    <div> 
            <img className="d-block mx-auto p-3" src={img} />
            <p className="display-3 responsive-header text-center text-white">Kortney Corlew</p>
            <div className="container p-2">            
                <svg className="svg-quote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="svg-white" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"/></svg>           
                <div className="row justify-content-center">          
                <p className="lead text-justify col-9 text-white responsive-text">The Keys to Success mentorship mission is to promote and enhance the development of youth by instilling a sense of competence, usefulness, and belonging. Our objective is for youth to become productive, caring, and responsible citizens. The Keys to Success mentorship will develop leadership traits and provide opportunities for future planning and decision-making skills. Health and life skills are offered, that helps youth achieve and maintain a healthy and active lifestyle. This <strong>core</strong> program area develops youth's capacity to engage in positive behavior that nurtures their own well-being, set personal goals, and live successfully as self-sufficient adults.</p>         
                </div>
                <div className="row justify-content-end">
                    <svg className="svg-quote" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="svg-white" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"/></svg>              
                </div>   
            </div>
            </div>
)

export default AboutHeader