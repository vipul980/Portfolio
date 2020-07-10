import React from "react";



function Contact() {

     const [name, setName] = React.useState("");
    
     function handleChange(e) {
        setName(e.target.value)
        console.log(e.target.value);
     }
     
     function handleClick(e) {
        const Name = name;
        var char1 = Name.slice(0,1).toUpperCase();
        var remainingChar = Name.slice(1, Name.length).toLowerCase();
         
         alert("Thankyou for the response" +" "+char1 + remainingChar+"!");
         



         e.preventDefault();
         
     }
     
    return(
     
    <form onSubmit={handleClick}>
    <div className="holder">
    <input type="text" name="fname" onChange={handleChange} placeholder="First Name" value={name}/>
    </div>
    <div className="holder">
    <input type="text"  name="lname" placeholder="Last Name"/>
    </div>
    <div className="holder">
    <input type="email" name="Email" placeholder="Email Address"/>
    </div>
    <div className="holder">
    <textArea name="mssg" placeholder="Type your message here" />
    </div>
    <div className="holder">
    <input type="submit" placeholder="Submit" />
    </div>
    </form>
    );
    
}

export default Contact;