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
            <li key={section.name}>{section.name}</li>
        ))}
        </ul>
    )
}

export default Nav