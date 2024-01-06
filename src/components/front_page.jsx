import React from "react";
import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/myimg.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

import { BrowserRouter as Router } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

export const HomePage = ()=>{




    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Software Engineer","Full Stack Developer","Web Developer"];
    const period = 3000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }


    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }
  
      

    return(
      <Router>
        <section className="homepage" id="home">
        
            <Container>

                <Row className ="align-item-center">
                    <Col className="xs={12} md={6} xl={7}">
                        <TrackVisibility>
                        {({ isVisible })=>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            
                            <h1>{"Hi! I'm Yash "}<br/><span className="txt-rotate" dataPeriod='1000' data-rotare='["Software Engineer","Full Stack Developer","Web Developer"]'><span className="wrap">{text}</span></span></h1>

                              <HashLink to='#connect'>
                              <button > Let's Connect<ArrowRightCircle size={25}/></button>
                                </HashLink>
                              
                        </div>}
                        </TrackVisibility>
                    </Col>

                    
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headerImg} alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>

                </Row>
           
            </Container>
        </section>
    </Router>
       
    )
}

export default HomePage


