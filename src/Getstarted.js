import React ,{useState} from 'react';
import image from './images/netflix_logo.jpg'
import {Link,BrowserRouter} from 'react-router-dom';
import {auth} from'./Firebase';
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'


 
function Getstarted(){
    const [email,setemail]=useState('');
    const[password,setpassword]=useState('');



    const register= async (e)=>{
      e.preventDefault();
      try{
        const user= await createUserWithEmailAndPassword(auth,email,password)
        console.log(user)
        alert("welcome to Netflix . Confirm your email in the next step")
      }catch(error){
          console.log(error)
      }
    }

    return(
        <>        
        <div className='startdiv'>
          <div className='netflixlogo'>
              <img src={image}></img>
           <Link to="/Signin"><h3 className='header_signin'>Sign-in</h3></Link>
        </div>

        
        <div className='acc_setup'>
            <h2>Finish setting up your <br />account</h2>
            <h5>Netflix is personalised for you.<br />
             Create an account to watch on <br />any device at any
              time.</h5>
          <form>
             <input type="text" name="text"  className="signup_email" placeholder='Email address'value={email} onChange={(e)=>{setemail(e.target.value)}} required></input> <br />
             <input type='password' placeholder='Password'className='signup_password' value={password} onChange={(e)=>{setpassword(e.target.value)}} required></input><br />
             <p className='password_characters'>password should be atleast 6 characters </p>
             <button onClick={register} className='Next_btn'><Link to={'/Watch'} className="color">Sign-up</Link></button>
             </form>
            </div>
            <div className="doubts_start">
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

export default Getstarted