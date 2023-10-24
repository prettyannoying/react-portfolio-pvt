import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faAngular, faHtml5, faCss3, faReact, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const asyncFunc = async () => {return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)};
        asyncFunc();
    }, []);
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>I like to read books, and paint, and sleep(like a lazy cat)</p>
                <p>I have almost 3 years of experience in frontend and it took me this long to finally make a portfolio because I missed working on frontend.</p>
                <p>I am so tired and sleepy right nowww</p>
            </div>

            <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                        </div>
                    </div>
                </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About