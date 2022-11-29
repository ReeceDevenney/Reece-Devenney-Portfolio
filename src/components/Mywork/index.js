import React, { useState } from "react";

function Mywork() {
    const [projects] = useState([
        {
            name: 'PokeNect',
            description: 'A social media site for fans of Pokemon to connect',
            live: 'https://dry-wildwood-44635.herokuapp.com/',
            github: 'https://github.com/PDismore/PokeNect',
            picture: require(`../../img/Mywork/Pokenect.png`)
        },
        {
            name: 'Movie Finder Pro',
            description: 'Find new movies using the ones you know',
            live: 'https://reecedevenney.github.io/Movie-Finder-Pro/',
            github: 'https://github.com/ReeceDevenney/Movie-Finder-Pro',
            picture: require(`../../img/Mywork/movie-finder.png`)
        },
        {
            name: 'JATE',
            description: 'PWA text editor',
            live: 'https://immense-ridge-74412.herokuapp.com/',
            github: 'https://github.com/ReeceDevenney/pwa-homework',
            picture: require(`../../img/Mywork/JATE.png`)
        },
        {
            name: 'Note Taker',
            description: 'An express app to take notes',
            live: 'https://frozen-ravine-39398.herokuapp.com/',
            github: 'https://github.com/ReeceDevenney/note-taker',
            picture: require(`../../img/Mywork/note-taker.png`)
        },
        {
            name: 'Contact Cards',
            description: 'Website to make contact cards',
            live: 'https://stark-chamber-69180.herokuapp.com/',
            github: 'https://github.com/ReeceDevenney/contact-card',
            picture: require(`../../img/Mywork/contact-cards.png`)
        },
        {
            name: 'Flashcard Quiz',
            description: 'Flashcard game to test web developer knowledge',
            live: 'https://reecedevenney.github.io/Flashcard-Quiz/',
            github: 'https://github.com/ReeceDevenney/Flashcard-Quiz',
            picture: require(`../../img/Mywork/flashcard.png`)
        },
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