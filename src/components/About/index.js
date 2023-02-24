import React from "react";

function About() {
    return(
       <div className="test">
        <div className="aboutHead">
            <img src={require('../../img/headshot.jpg')} alt="picutre of Reece Devenney" id='headshot'></img>
            <div className="fullName">
                <p className="firstName">Reece</p>
                <p className="lastName">Devenney</p>
            </div>
        </div>
        <p className="aboutText">
        A recent graduate with a strong interest in web design and development. With proficiency in TypeScript, SQL, NoSQL, and React, 
        I am eager to make a meaningful impact at your company and contribute to the development of engaging and dynamic web applications.
        </p>
       </div>
    )
}

export default About