import React from "react";
import { ReactComponent as Github } from '../../img/icons/github.svg'
import { ReactComponent as Linkedin } from '../../img/icons/linkedin.svg'


function Footer() {
    return (
        <footer>
            <a href="https://github.com/ReeceDevenney" target="_blank" className="footerImg"><Github /></a>
            <a href="https://www.linkedin.com/in/reecedevenney/" target="_blank" className="footerImg"><Linkedin /></a>
        </footer>
    )
}

export default Footer