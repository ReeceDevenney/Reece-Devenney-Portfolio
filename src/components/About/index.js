import React from "react";

function About() {
    return(
       <div>
        <div className="aboutHead">
            <img src={require('../../img/headshot.jpg')} alt="picutre of Reece Devenney" id='headshot'></img>
            <div className="fullName">
                <p className="firstName">Reece</p>
                <p className="lastName">Devenney</p>
            </div>
        </div>
        <p className="aboutText">
           Full stack web developer, NCSU Graduate, and Eagle Scout based out of Charlotte, NC. I am excited to be able to bring my skills to your company!
        </p>
       </div>
    )
}

export default About