import React from "react";
import protfo from '../assets/portfo.png'
import loginpage from '../assets/loginpage.avif'
import weather from '../assets/weather.png'
import snake from '../assets/snake.png'


export const Projects = ()=> {
    return(
              
               <section class="projects" id="projects">
               <div class="max-width">
                 <h2 class="title">Projects</h2>
            
                 <div class="carousel owl-carousel">
                   <div class="card">
                     <div class="box">
                       <img src={loginpage} alt="" />
                       <div class="text">LogIn System</div>
                       <p>Details:-Login System with email verification .<br />Technologies Used :- NodeJs, ExpressJs, MondoDB <br /></p>
                       <div className="links">
                        <a href="" className="link">Project Demo</a>
                        <a href="https://github.com/mickyash/login_system" className='link'>Source Code</a>
                        </div>
                      </div>
                   </div>
                   <div class="card">
                     <div class="box">
                       <img src={protfo} alt="" />
                       <div class="text">Portfolio</div>
                       <p className="phara">Details:- Personal Portfolio  <br/> Technologies Used :- ReactJs, Bootstrap, NodeJs</p>
                       <div className="links">
                        
                        <a href="" className='link'>Source Code</a>
                        </div>

                     </div>
                   </div>
                  
                     <div class="card">
                     <div class="box">
                       <img src={weather} alt="photo" />
                       <div class="text">Weather App</div>
                       <p className="phara">Details :-.weather app using weather api<br />Technologies Used :- Html, Css , Bootstrap.<br /></p>
                       <div className="links">
                        <a href="https://mickyash.github.io/weatherapp/" className="link">Project Demo</a>
                        <a href="https://github.com/mickyash/weatherapp" className='link'>Source Code</a>
                        </div>
                     </div>
                   </div>
                   
                   <div class="card">
                     <div class="box">
                       <img src={snake} alt="photo" />
                       <div class="text">Snake Game</div>
                       <p className="phara">Details :-.Snake Game <br />Technologies Used :- Html, Css, Javascript .<br /></p>
                       <div className="links">
                        <a href="https://mickyash.github.io/snakegameold/" className="link">Project Demo</a>
                        <a href="https://github.com/mickyash/snakegameold" className='link'>Source Code</a>
                        </div>
                     </div>
                   </div>





                   </div>
                   </div>
             </section>
    )
}




export default Projects;