
import './App.css';
import Firstpage from './loging/firstpage';
import Onboarding from './loging/Onboarding';
import {Route, Routes} from "react-router-dom"
function App() {
  return (
    <div>
      <Routes>
    
<Route path="/" element={<Firstpage/>} />
<Route path="/onboard" element={<Onboarding/>} />
      </Routes>
    

    </div>

  );
}

export default App;
