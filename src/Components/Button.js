import React from "react";



function Button() {
    const [isMouseOver, setMouseOver] = React.useState(false);
    
    

    function handleMouseOver() {
     setMouseOver(true);
    };

    function handleMouseOut() {
        setMouseOver(false);
    }
   
    return <div className="middle">
    
    <button 
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut} style={{backgroundColor: isMouseOver === true ? "#3f3f44" : "#a6dcef"}}>Launch Page</button>
    
    </div>
}

export default Button;