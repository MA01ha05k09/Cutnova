
import './App.css';
import Firstpage from './loging/firstpage';
import Onboarding from './loging/Onboarding';
import Create from './loging/Create';
import Login from './loging/login';
import Forgot from './loging/Forgot';
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
    
<Route path="/" element={<Firstpage/>} />
<Route path="/onboard" element={<Onboarding/>} />
<Route path= "/Create" element={<Create/>}/>
<Route path= "/login" element={<Login/>}/>
<Route path= "/Forgot" element={<Forgot/>}/>


      </Routes>
    

    </div>

  );
}

export default App;
