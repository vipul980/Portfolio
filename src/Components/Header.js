import React from "react";

function Header() {
    const [isToggle, setToggle] = React.useState(true);
    
    function handleClick(e) {
        setToggle(!isToggle);
       console.log("clicked");
       console.log(isToggle);
    
 }
         if (isToggle === false) {
             var prop = "nav-menu-show";

         } else if(isToggle === true) {
             var prop = "nav-menu";
            
         }
       
    
        

    return <nav className="navbar">
    <a className="nav-brand">Vipul Gupta</a>
    <div  className="toggler-Hamburger">
     <a className="hamIcon" onClick={handleClick} style={{display: isToggle === true ? "inline-block": "inline" }}><i class="fa fa-bars" aria-hidden="true"></i></a>  
    </div>
    <div className={prop}>
    <div className="nav-item">
    <a href="https://www.facebook.com/vipdwayne"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
    </div>
    <div className="nav-item">
    <a href="https://www.instagram.com/vipul_gupta777/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
    </div>
    <div className="nav-item">
    <a href="https://www.linkedin.com/in/vipul-gupta-34b864168/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
    </div>
    <div className="nav-item">
    <a href="https://twitter.com/Bringit98"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
    </div>
    <div className="nav-item">
    <a href="https://github.com/vipul980"><i class="fa fa-github-square" aria-hidden="true"></i></a>
    </div>
     </div>
    </nav>
    
}

export default Header;
