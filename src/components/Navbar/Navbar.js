import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    const showMenu=()=>{
        var x=document.querySelector(".navbar")
        if(x.style.display==="block"){
           x.style.display="none";
        }
        else{
         x.style.display="block";
        }
    }
  return (
    <div>
        <div className="nav">
            <div className="logo">
                <img src="/images/logo.png" alt="logo"></img>
            </div>
            <div className="navbar">
                <ul className="menu-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="icons">
            <ion-icon name="menu-outline" className="bars" onClick={showMenu}></ion-icon>
            </div>
            
        </div>
       
    </div>
  )
}

export default Navbar