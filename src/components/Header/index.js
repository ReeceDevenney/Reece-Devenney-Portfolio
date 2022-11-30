import React from 'react'
import Nav from '../Nav'
import pdf from '../../assets/Resume.pdf'

function Header(props) {
    const {
        sections = [],
        currentSection,
        setCurrentSection
    } = props
    return(
        <header>
            <div className='callCard'>RD.</div>
            <Nav
            sections={sections}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            ></Nav>
        </header>
    )
}

export default Header