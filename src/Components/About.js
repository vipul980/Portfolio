import React from "react";
import Button from "./Button";

function About() {
     return <div className="middleContainer">

     <div className="profile">
     <div className="profileImage">
     <img className="mySnap" src="images/Me.jpg" alt="My Snap" />
     </div>
     <h2>Hello.</h2>
     <p className="intro">I am an web developer. I love this profession, I ❤️ coffee and brew my own beers🍺.</p>
     <a href="/Vipul gupta resume.pdf" download><Button /></a>
     </div>

     <hr />

     <div className="skills">
     <h1>My Skills.</h1>
      <div className="skillRow">
          <img class="codeImg" src="https://media.giphy.com/media/3p50WGyUqeU5W/giphy.gif" alt="code-img" />
         <h3>Design & <br />Development</h3>
             <p>I passed my HSC with an biology subject and eventually at that time, I didn't knew anything about coding and I started learning to code when I was in 1st  year of Engineering and got interest in it when I started learning about web design and development. Over time, I gain wealth of experience designing and developing web applications.</p>

     </div>

     <div className="skillRow">
     <img className="panipuriImg" src="images/pani-puri.jpg" alt="Pani-Puri" />
      <h3>Pani Puri Challenge</h3>
      <p>But my best skill is actually in eating Pani puri's. I am the undisputed King of pani puri challenges. It's my favourite street food ❤️.</p>

     
     </div>
     </div>
     

     
     
     </div>
     
     
     
}

export default About;