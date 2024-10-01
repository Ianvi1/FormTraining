import RegisterScreen from "../models/register/RegisterScreen";
import LoginScreen from "../models/login/LoginScreen";
import {Route, Routes} from 'react-router-dom';


const Paths = () => {

return (
  <Routes>
    <Route path="/" element={<LoginScreen/>} />
    <Route path="/register" element={<RegisterScreen/>} />
  </Routes>
);

}

export default Paths;