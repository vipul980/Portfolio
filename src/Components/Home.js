import React from "react";
import Header from "./Header";

function Home() {
 return <div className="topContainer">
 <Header />
 <div className="title-text">
 <h1>I'm Vipul.</h1>
 <p>a <span className="web">web</span> developer.</p>
 </div>
 <img  className="topCloud" src="images/cloud.png" alt="Top cloud" />
 <img className="bottomCloud" src="images/cloud.png" alt="Bottom cloud" />
 <img className="mountain" src="images/mountain.png" alt="Mountain" />
 </div>
}

export default Home;