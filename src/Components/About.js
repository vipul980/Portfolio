import React from "react";
import Button from "./Button";
import Skills from "./Skills";
import Projects from "./Projects";

function About() {
     return <div className="middleContainer">

     <div className="profile">
     <div className="profileImage">
     <img className="mySnap" src="images/Me.jpg" alt="My Snap" />
     </div>
     <h2>Hello.</h2>
     <p className="intro">I am an web developer. I love this profession, I ❤️ coffee and brew my own beers🍺.</p>
     <a href="/Vipul Resume.pdf" download><Button /></a>
     </div>

     <hr />
     <Skills />
     <Projects />
     

    </div>
     
     
     
}

export default About;