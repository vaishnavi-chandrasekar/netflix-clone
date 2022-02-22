import React,{useState,useEffect} from 'react';
import image from './images/netflixblack.jpg';
import pics from './images/Netflix-avatar.jpg';
import './Nav.css';

function Nav (){
    const [show,handleShow] = useState(false)
     
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
            
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[])


    return(
        <>
        <div className={`nav ${show && "nav__black"}`}>
            <img className='nav__logo' src={image} alt="" /> 
             <img className='nav__avatar' src={pics} alt="" />

        </div>
        </>
    )
}


export default Nav