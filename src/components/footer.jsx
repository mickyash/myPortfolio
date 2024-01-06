import React from "react";
import githubIcon from '../assets/gitt.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'

export const Footer = ()=>{

    return(
        <div className="footer">

            <div className="social-icon">
                <a href="https://www.linkedin.com/in/yash-sharma-b378771ba/">  
                  <img src={linkedin} alt="linkedin"  />
                </a>
                <a href="https://github.com/">
                <img src={githubIcon} alt="githubLink" />
                </a>
                <a href="https://twitter.com/Yash_2862">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
          
            <h4> sharmayash2862@gmail.com</h4>
            <h6>Copyright &copy;</h6>

        </div>
    )
}



export default Footer;