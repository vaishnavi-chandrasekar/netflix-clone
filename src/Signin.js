import React,{useState} from "react";
import image from './images/netflixlogo.jpg'
import {Link} from 'react-router-dom'
import {auth} from'./Firebase';
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'

//https://www.netfpx.com/in/LoginHelp

function Signin() {
    const[email, setemail]=useState('');
    const[password,setpassword]=useState('');


    const login= async (e)=>{
      e.preventDefault();
      try{
        const user= await signInWithEmailAndPassword(auth,email,password)
        console.log(user)
      }catch(error){
          console.log(error)
      }
    }
    return (
        <>
            <div className="enter">
                <div className="images">
                <img src={image} className="netflix"></img>

                </div>
                <div className="smdiv">
                    <b> <h2 className="font">Sign In</h2></b>
                    <form>
                    <input type="email,number" name="Username" className="phn" placeholder='Email or phone number' value={email} onChange={(e)=>{setemail(e.target.value)}} required></input>
                    <input type="password" name="text" className="password" type-security="disc" placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} required></input>
                     <button type="submit" onClick={login} className="submitbtn"><Link to={'/Mainpage'} className="color">Sign In </Link></button> 
                     </form>                   
                     <div className="checkbox">
                        <input type="checkbox" className="remember" name="remember" value="remember" />
                        <label for="remember">Remember me</label>
                        <p className="help"> <a href="https://www.netflix.com/in/LoginHelp"> Need help?</a></p></div>

                        <div className="signup">
                          <p>New to Netflix ? </p>
                         <Link to="/Getstarted"> <h4 className="header">.. Sign up now</h4></Link>
                        </div>
                        <div className="terms">
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                            <p>The information collected by Google reCAPTCHA is subject to the Google Privacy Popcy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personapsed advertising by Google).</p>
                        </div>
                </div>
                <div className="doubts">
                    <div className="info">
                    <p className="extra_div">Questions? Call </p>
                    <a href="tel:9962075252"className="number"> 9962075252</a>
                    </div>
                    <div className="questions">
                    <a href='https://help.netflix.com/en/node/412'target="_blank">FAQ</a>
                 <a href='https://help.netflix.com/en/' target="_blank">Help center</a>
                 <a href='https://help.netflix.com/legal/termsofuse'target='_blank'>Terms of use</a>
                 <a href='https://help.netflix.com/legal/privacy'target='_blank'> Privacy</a>
                </div>
                <div className="lidiv">
                  
                <a href='https://help.netflix.com/legal/corpinfo' target="_blank">Corporate <br />information</a>
                  <p></p>
                  <p></p>
                  <p></p>

                </div>

                </div>
            </div>
        </>
    )
}


export default Signin