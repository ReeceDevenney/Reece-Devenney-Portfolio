import React, { useState } from "react";

function Mywork() {
    const [projects] = useState([
        {
            name: 'Arij',
            description: 'A task managment site',
            live: 'https://pacific-cliffs-88620.herokuapp.com/',
            github: 'https://github.com/Jstelzl/arij',
            picture: require(`../../img/Mywork/Arij.png`)
        },
        {
            name: 'PokeNect',
            description: 'A social media site for fans of Pokemon to connect',
            live: 'https://dry-wildwood-44635.herokuapp.com/',
            github: 'https://github.com/PDismore/PokeNect',
            picture: require(`../../img/Mywork/Pokenect.png`)
        }
        
    ])
    return (
        <div>
            {projects.map((project) => (
                <div className="project">
                    <div className="projectText">
                        <a href={project.live} target='_blank' rel="noreferrer"><h2>{project.name}</h2></a>
                        <p>{project.description}</p>
                        <a href={project.github} target='_blank' rel="noreferrer">| Github Repo |</a>
                    </div>
                    <a className="projectImg" href={project.live} target='_blank' rel="noreferrer"><img src={project.picture} alt='preview of project' className="projectImg2"></img></a>
                </div>
            ))}
        </div>
    )
}

export default Mywork