import React from 'react'
import appearance from '../../public/imgs/kortney_speech.jpg'

const AppearancesIndex = (props) => (
    <div>
        <div className="container-fluid p-3">
            <h2 className="display-3 text-center responsive-header">Appearances</h2>
            <div className="row p-2 mt-4 mx-auto row-index">
                <div className="col-md">
                    <img className="respond img-fluid rounded ap-pic p-2" src={appearance} />
                </div>
                <div className="col-md">
                    <p className="lead responsive-text">I have experience speaking to the public about skills for success, and youth and community development. In addition, I offer crowd games, demonstratives, and more. I will be pleased to support any event.</p>
                </div>
            </div>
        </div>
    </div>
)

export default AppearancesIndex