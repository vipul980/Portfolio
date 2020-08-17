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
     <a href="/Vipul Resume.pdf" download><Button /></a>
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

    <div className="projects">
    <h1>My Projects.</h1>

    <div className="projectRow">
    <img className="secretImg" src="images/Secret.png" alt="Secret-web-app" />
    <h3>Secrets</h3>
    <p>Developed an Back-end web application with full authentication & security using Node js and Google,Facebook OAuth, Any user can register and login him or her self and can submit their secrets anonymously and all the registered users can see each others secret post without knowing whose secret belongs to whom.</p>
    <a href="https://dark-secret2020.herokuapp.com/"><button className="secretButton">Have a look!</button></a>
    </div>

     <div className="projectRow">
     <img className="drumkitImg" src="images/Drumkit.png" alt="Drumkit-web-pp" />
     <h3>Drumkit</h3>
     <p>Designed and Developed an drumkit web application with sound system using React js and UIFX module, It's basically an Drumkit which produces sound whenever the corresponding drum gets clicked or key press.</p>
     <a href="https://drumkit1998.netlify.app/"><button className="secretButton">Have a look!</button></a>
     </div> 

      <div className="projectRow">
     <img className="noteImg" src="images/Note.png" alt="Note-keeper-web-app" />
     <h3>Note-Keeper</h3>
     <p>Designed and Developed an drumkit web application with sound system using React js and UIFX module, It's basically an Drumkit which produces sound whenever the corresponding drum gets clicked or key press.</p>
     <a href="https://note-keeper2020.netlify.app/"><button className="secretButton">Have a look!</button></a>
     </div>    
     
     </div>


     </div>
     
     
     
}

export default About;