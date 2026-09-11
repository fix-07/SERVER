
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbaruse from './Componet/Navbaruse';
import Listusers from './Componet/Listusers';
import Home from './Componet/Home';
import Adduser from './Componet/Adduser';
import Updateuser from './Componet/Updateuser';


function App() {
  return (
   <div>
   <Navbaruse/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Listusers" element={<Listusers/>} />
      <Route path="/adduser" element={<Adduser/>} />
      <Route path="/updateuser/:id" element={<Updateuser/>} />
    </Routes>
   
   </div>
  );
}

export default App;
