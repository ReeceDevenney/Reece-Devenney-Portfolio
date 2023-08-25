import React, { useState } from "react";

function Mywork() {
    const [projects] = useState([
        {
            name: 'Shop-It',
            description: 'An ecomerce site where users can post and buy products from others',
            live: 'https://shop-it-ac92e.web.app/',
            github: 'https://github.com/ReeceDevenney/shop-it',
            tech: "Typescript, Vue, Firebase"
        },
        {
            name: 'Arij',
            description: 'A task managment site for teams to creat and track issue tickets',
            live: 'https://pacific-cliffs-88620.herokuapp.com/',
            github: 'https://github.com/Jstelzl/arij',
            tech: "Javascript, React, GraphQL"
        },
        {
            name: 'PokeNect',
            description: 'A social media site for fans of Pokemon to find and follow other enthusiest, and discuss the game',
            live: 'https://dry-wildwood-44635.herokuapp.com/',
            github: 'https://github.com/PDismore/PokeNect',
            tech: "Javascript, SQL"
        }

    ])
    return (
        <div>
            {projects.map((project) => (
                <div className="project">
                    <div className="projectText">
                        <a href={project.live} target='_blank' rel="noreferrer"><h2>{project.name}</h2></a>
                        <p>{project.description}</p>
                        <p className="techUsed">{project.tech}</p>
                        <div>
                            <a href={project.github} target='_blank' rel="noreferrer"> Github Repo | </a>
                            <a href={project.live} target='_blank' rel="noreferrer"> Link </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Mywork