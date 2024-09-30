import RegisterScreen from "../models/register/RegisterScreen";
import LoginScreen from "../models/login/LoginScreen";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const pageRoute = () => {

return (
<Router>
  <Routes>
    <Route path="/" element={<LoginScreen/>} />
    <Route path="/register" element={<RegisterScreen/>} />
  </Routes>
</Router>

);

}

export default pageRoute;