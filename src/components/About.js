import React from "react";

const About = () => {
    return (
        <div>
            <div>
                <img
                src={`${ProcessingInstruction.env.PUBLIC_URL}/iMAGE_PNG`}
                alt="Profile"
                width="200"
            />
        </div>
        
        <div>
            <h2>Athaliah Henriquez</h2>
            <p>
             I'm a 4th year Psychology and Computer Science major at the University Victoria. 
             I've worked with C, Python, Javascript and latest of all React.
             My hobbies include watercolor, coding -obviously-, and Salsa dancing 💃!

            </p>
        </div>

        <div>
            <a>
                href= URL link to instagram/linkedin/github
                target="_blank"
                rel="noopener noreferrer"
            </a>
        </div>
        </div>
       
            
    )
}

export default About;