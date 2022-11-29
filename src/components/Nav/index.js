import React from "react";

function Nav(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props
    return(
        <ul>
        {sections.map((section) =>(
            <li key={section.name} onClick={() => {setCurrentSection(section);}} className={`${currentSection.name === section.name && 'navActive'}`}>{section.name}</li>
        ))}
        </ul>
    )
}

export default Nav