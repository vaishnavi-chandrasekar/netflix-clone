import React,{useState } from 'react';
import image from './images/netflixlogo.jpg'
import { Link } from 'react-router-dom';
import pic from './images/kids.jpg'
import photo from './images/tv.jpg'
import dpic from './images/download.jpg'
import mpic from './images/movie.jpg'
import {auth} from'./Firebase';
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'




function Homepage() {

    const[email, setemail]=useState('');
    
    const register= async (e)=>{
       e.preventDefault();
       try{
           const user=createUserWithEmailAndPassword(auth,email)
           console.log(user)
           
       }catch(error){
           alert(error.message)
       }
    }
    return (
        <>
            <div className='back'>
                <div className='logo'>
             <img src={image}  alt=''className='nlogo'></img>

                   
            <div className='sign'>
            <Link to={"/Signin"}><button type='submit' className='sign_btn'>Sign-in</button></Link>

            </div>

                </div>

                <div className="form">
                    <b> <p className="main">Unlimited movies,TV shows and more.</p></b>
                    <p className='para'>Watch anywhere. Cancel anytime.</p>
                    <p className='slogan'>Ready to watch?Enter your email to create or restart your membership.</p>

                    {/* <input type="text" name="text" className="forms" placeholder='Email address'value={email} onChange={(e)=>{setemail(e.target.value)}} ></input> */}
                 <Link to={"/Getstarted"}><button type='submit' className="started">Get Started  </button></Link>
                    
                </div>
            </div>
            <div className='watch'>
                <div className='paratv'>
              <h1 className='heading'>Enjoy on your TV.</h1>
              <p className='subhead'>Watch on smart TVs,Play Station,Xbox,<br />
              Chromecast,Apple TV,Blu-Ray players and <br /> more.</p>

              </div>
              <div className='tv'>
                <img src={photo} className="tvimage"></img>
                </div>



            </div>
            <div className='next'>
                <div className='download'>
                    <img src={dpic} className="downloadimage"></img>
                </div>
                <div className='paradown'>
               <h1 className='head'>Download your shows <br />to watch offline.</h1>
               <p className='sub'>Save your favourites easily and always have <br />
               something to watch.</p>
               </div>

            </div>
            <div className='nextdiv'>
                <div className='everywhere'>
                <h1 className='next_head'>Watch everywhere.</h1>
                <p className='next_sub'>Stream unlimited movies and TV shows on<br /> 
                your phone ,tablet,laptop,and TV.</p>
                </div>
                <div className='movie'>
                    <img src={mpic} className="movieimage"></img>
                </div>
            </div>
            <div className='lastdiv'>
                <div className='img_div'>
                <img src={pic} className="kidsimage"></img>
                </div>
                <div className='paragraph'>

                <h1 className='last_div'>Create profiles for children.</h1>
                <p className='last__div'>Send children on adventures with their<br /> 
                favourite characters in a space made just for <br />them—free with your membership.</p>
                </div>
            
            </div>
            <div className='frequently'>
               <b><h1 className='qsection'>Frequently Asked Questions</h1></b> 
               <input type="text" name="text" className="qone" value='What is Netflix?'></input><br />
               <p className="ansone">Netflix is a streaming service that offers a wide variety of<br />
                award-winning TV shows, movies, anime,documentaries<br /> and more – 
                on thousands, of internet-connected devices.</p><br />

               <input type="text" name="text" className="qtwo" value='How much does Netflix cost?'></input><br />
               <p className="anstwo">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or <br />
               streaming device, all for one fixed monthly fee. Plans range from<br />
                ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p><br />

               <input type="text" name="text" className="qthree" value='Where can I watch?'></input><br />
               <p className="ansthree">Watch anywhere, anytime. Sign in with your Netflix account to <br />
               watch instantly on the web at netflix.com from your personal computer </p><br />

               <input type="text" name="text" className="qfour" value='How do I cancel?'></input><br />
               <p className="ansfour">Netflix is flexible. There are no annoying contracts and no commitments.<br />
                You can easily cancel your account online in two clicks.<br />
                 There are no cancellation fees – start or stop your account anytime.</p><br />

               <input type="text" name="text" className="qfive" value='Is Netflix good for Kids?'></input><br />
               <p className="ansfive">Kids profiles come with PIN-protected parental controls that<br /> 
               let you restrict the maturity rating of content kids can watch and <br />
               block specific titles you don’t want kids to see.</p><br />
                  
                  <div className='sectionq'>
                  <p className='slogan'>Ready to watch?Enter your email to create or restart your membership.</p>

                   <input type="text" name="text" className="forms" placeholder='Email address' ></input>
                   <button type='submit' className="started">Get Started  </button>


                  </div>
            </div>
            <div className='final_div'>
                <div className='details'>
                <p>Questions? Call</p>
                <a href='tel:9962075252' className='phn_no'>9962075252</a>
              </div>
              <div className='t_c'> 
                <a href='https://help.netflix.com/en/node/412'target="_blank">FAQ</a>
                 <a href='https://help.netflix.com/en/' target="_blank">Help center</a>
                <Link to={"/Signin"}> <p>Account</p></Link>
                 <a href='https://media.netflix.com/en/'target='_blank'>Media center</a>
                <a href='https://ir.netflix.net/ir-overview/profile/default.aspx'target='_blank'>Investor relations</a>
                 <a href='https://jobs.netflix.com/' target='_blank'> Jobs</a><br />
                 <a href='https://devices.netflix.com/en/' target='_blank'>Ways of watch</a>
                 <a href='https://help.netflix.com/legal/termsofuse'target='_blank'>Terms of use</a>
                 <a href='https://help.netflix.com/legal/privacy'target='_blank'> Privacy</a>
                 <a href='https://help.netflix.com/legal/corpinfo' target="_blank">Corporate <br />information</a>
                 <a href='https://help.netflix.com/en/contactus' target="_blank">Contact us</a>
                 <a href='https://www.netflix.com/in/browse/genre/839338' target="_blank">only on Netflix</a>
              </div>


            </div>

        </>
    )
}


export default Homepage