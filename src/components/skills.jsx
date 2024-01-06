import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";

import 'react-multi-carousel/lib/styles.css';


import React from "react"
import Carousel from 'react-multi-carousel';
import cursor from '../assets/cursorIcon.png'
import serverIcon from '../assets/serverIcon.png'


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
      
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };




    return(
        <section className="skills" id="skills">
      
           <h2 className="h2textskill">Skills</h2>
          
            
            <ul className="skillsItem">
            <li className="skillsItem">
                    <img src={cursor} alt="icon"  className="imgItem"/>
                    <div>
                    <h3>FrontEnd Devoloper</h3>
                    <p>I have experience building optimized and responsive sites</p>
                    </div>
                </li>
                <li className="skillsItem">
                    <img src={serverIcon} alt="icon"  className="imgItem"/>
                    <div>
                    <h3>BackEnd Devoloper</h3>
                    <p>I have experience building optimized APIs</p>
                    </div>
                </li>
            </ul>

            <div/>

           


            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Nodejs & Expressjs</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Reactjs</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>HTML,CSS,Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div> 


    
       
        </section>
    )
}


export default Skills;