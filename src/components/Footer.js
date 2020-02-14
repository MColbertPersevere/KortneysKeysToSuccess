import React from 'react'
import logo from '../../public/imgs/kortneylogo.jpg'

const Footer = (props) => (
    <div className="container-fluid border-top-brown p-4">
        <div className="row">
                <div className="col-sm-4">
                    <img className="footer-logo" src={logo} />
                </div>
                <div className="col-sm-4 text-center">
                <p className="lead text-3">Kortney Corlew</p>
                <p className="lead text-3">Nashville, TN</p>
                </div>
                <div className="col-sm-4 text-center">
                    
                    <p className="lead text-3">Phone:(615) 717-5506</p>
                    <p className="lead text-3 text-break">k.corlew@yahoo.com</p>
                </div>
        </div>
    </div>
)


export default Footer