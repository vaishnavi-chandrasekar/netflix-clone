import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './Homepage';
import Signin from './Signin';
import './Signin.css';
import Getstarted from './Getstarted';
import './Getstarted.css'
import Watch from './Watch';
import './Watch.css'
import Mainpage from './Mainpage';
import './Mainpage.css';


//c0774d29ba2adff7cc79b02a1b6e5c5b
//https://api.themoviedb.org/3/movie/550?api_key=c0774d29ba2adff7cc79b02a1b6e5c5b
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
                 <Route path="/" element={<Homepage />}></Route>
                   <Route path="/Signin" element={<Signin />}></Route> 
                  <Route path="/Homepage" element={<Homepage />}></Route>
                <Route path="/Getstarted" element={<Getstarted />}></Route> 
                <Route path="/Watch" element={<Watch />}></Route> 
                <Route path="/Mainpage" element={<Mainpage />}></Route> 

              </Routes> 

    </BrowserRouter>
    </>
  );
}

export default App;
