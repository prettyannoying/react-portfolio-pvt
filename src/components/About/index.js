import AnimatedLetters from "../AnimatedLetters"
import './index.scss'
const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={['A','b','o','u','t', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>I like to read books, and paint, and sleep(like a lazy cat)</p>
                <p>I have almost 3 years of experience in frontend and it took me this long to finally make a portfolio because I missed working on frontend.</p>
                <p>I am so tired and sleepy right nowww</p>
            </div>

        </div>
    )
}

export default About