import React from "react";
import { ReactComponent as Github } from '../../img/icons/github.svg'
import { ReactComponent as Linkedin } from '../../img/icons/linkedin.svg'
import { ReactComponent as Stackoverflow } from '../../img/icons/stackoverflow.svg'


function Footer() {
    return(
        <footer>
            <a href="https://github.com/ReeceDevenney" target="_blank" className="footerImg"><Github /></a>
            <a href="https://www.linkedin.com/in/reece-d-83753520a/" target="_blank" className="footerImg"><Linkedin /></a>
            <a href="#" target="_blank" className="footerImg"><Stackoverflow /></a>
        </footer>
    )
}

export default Footer