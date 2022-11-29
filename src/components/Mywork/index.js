import React from "react";

function Mywork() {
    return (
        <div className="project">
            <div className="projectText">
                <a href="https://dry-wildwood-44635.herokuapp.com/" target='_blank'><h2>PokeNect</h2></a>
                <p>A social media site for fans of Pokemon to connect!</p>
                <a href="https://github.com/PDismore/PokeNect" target='_blank'>| Github Repo |</a>
            </div>
            <a className="projectImg" href="https://dry-wildwood-44635.herokuapp.com/" target='_blank'><img src={require('../../img/Mywork/Pokenect.png')} className="projectImg2"></img></a>

        </div>
    )
}

export default Mywork