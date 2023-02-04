import React from 'react'
import Nav from '../Nav'

function Header(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props
    return(
        <header>
            <div className='text-xl text-orange mt-2 ml-6'>RD.</div>
            <Nav
            sections={sections}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            ></Nav>
        </header>
    )
}

export default Header