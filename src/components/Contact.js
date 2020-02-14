import React from 'react'
import ContactHeader from './ContactHeader'
import Form from './Form'
import Slide from 'react-reveal/Slide'

export default class Contact extends React.Component {
    render(){
        return(
            <div>
                <Slide left>
                <h1 className="display-3 text-center p-2 mt-3 name responsive-header">Contact Kortney</h1>
                <div className="container-fluid text-center p-2">
                    <ContactHeader />
                </div>
                </Slide>
                <Slide right>
                <p className="display-4 text-contact-2 text-center mt-5">For more information please send a brief message below.</p>
                <div className=" container fluid row-index mt-3">
                <Form />          
                </div>
                </Slide>
            </div>
        )
    }
}
