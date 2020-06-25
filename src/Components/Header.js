import React from "react";

function Header() {
    return <nav className="navbar">
    <a className="nav-brand">Vipul Gupta</a>
    <div className="nav-menu">
    <div className="nav-item">
    <a><i class="fa fa-facebook-square icon" aria-hidden="true"></i></a>
    </div>
    <div className="nav-item">
    <a><i class="fa fa-instagram icon" aria-hidden="true"></i></a>
    </div>
    <div className="nav-item">
    <a><i class="fa fa-linkedin-square icon" aria-hidden="true"></i></a>
    </div>
    <div className="nav-item">
    <a><i class="fa fa-twitter-square icon" aria-hidden="true"></i></a>
    </div>
    <div className="nav-item">
    <a><i class="fa fa-github-square icon" aria-hidden="true"></i></a>
    </div>
     </div>
    </nav>
    
}

export default Header;
