import React,{useState} from "react";
import image from './images/netflixblack.jpg';
import {auth} from'./Firebase';
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import {Link} from 'react-router-dom';


function Watch(){

    const [user,setuser]=useState({});

    onAuthStateChanged(auth ,(currentuser)=>{
        setuser(currentuser);
    })

    const logout= async ()=>{
        await signOut(auth);
    }

    return(
        <>
        <div className="main_div">
         <div className="small_div">
             <img src={image} className="logo__watch"></img>
             <button type="submit" onClick={logout} className="Sign_out">Sign-out</button>
         </div>
         <div className="contents">
         <div className="profile">

             <h1 className="create_profile">Welcome!</h1>
             <h3 className="watch__header">Enjoy Unlimited Movies and Tv shows on your <br />phone,tablet,laptop and Tv .</h3>
             <input type="email"  className="check_email" value={user?.email}></input><br />

            <Link to={"/Mainpage"}> <button type="submit" className="confirm">Confirm Your Email</button></Link>
              </div>
              </div>
        </div>
        </>
    )
}

export default Watch