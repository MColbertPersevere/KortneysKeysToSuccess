import React from 'react'

const Form = (props) => (
    <div> 
        <form className="p-3">
            <div className="form-row">
                <div className="col">
                <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col">
                <input type="text" className="form-control" placeholder="Last name" />
                </div>
            </div>
            <div>
                <div className="form-group">
                    <br />
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter message here" />
                </div>
                <button type="submit" className="btn contact-btn btn-lg d-block mx-auto">Send Message</button>
            </div>
        </form>    
    </div>
)

export default Form