import React from "react";
import pdf from '../../assets/Reece Devnney Resume_February 2023_Updated.pdf'

function Nav(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props
    return(
        <ul>
        {sections.map((section) =>(
            <li key={section.name} onClick={() => {section.name !== 'Resume' && setCurrentSection(section)}} className={`${currentSection.name === section.name && 'navActive'}`}>
                {section.name === 'Resume'? (<a href= {pdf} target='_blank' id="resumeNav">{section.name}</a>) : (section.name)}
            </li>
        ))}
        </ul>
    )
}

export default Nav