import React from "react";

function Projects() {
    return (
         
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
     <p>Designed and Developed an Note-Keeper web application using React js, It's basically an Notes where we can keep a note of anything with brief description.</p>
     <a href="https://note-keeper2020.netlify.app/"><button className="secretButton">Have a look!</button></a>
     </div>    
     
     </div>
    );
};

export default Projects;