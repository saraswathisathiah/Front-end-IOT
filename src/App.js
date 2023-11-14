import logo from './logo.svg';
import './App.css';
import LoginPage from './Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard/DashBoard';
import DisplayDevices from './DisplayDevices/DisplayDevices';
import DisplayDevices1 from './DisplayDevices/DisplayDevices1';
import PopupMod from './popup_component/ModalPopup';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LoginPage/>} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path="/displayDevices" element={<DisplayDevices1/>}/>
          <Route path="/addDevice" element={<PopupMod/>}/>
        </Routes>

      </BrowserRouter>
      {/* <DashBoard/> */}

      {/* <DashBoard/> */}


    </div>
  );
}

export default App;
