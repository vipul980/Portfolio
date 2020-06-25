import React from "react";
import {useHistory} from "react-router-dom"
function Resume() {
    const history = useHistory();
    function handleClick() {
      
      history.push("/");
    }
    return <div> 
    <h1>Hello this is my resume</h1>
    <button onClick={handleClick}>Go Home</button>
    </div>
};

export default Resume;