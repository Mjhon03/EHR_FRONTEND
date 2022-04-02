import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Contact } from "./Components/Page/Contact/Contact";
import { Home } from "./Components/Page/Home/Home";
import { Login } from "./Components/Page/Login/Login";
import { Register } from "./Components/Page/Register/Register";
import { AboutUs } from "./Components/Page/AboutUs/AboutUs"
import { ForgotPassword } from "./Components/Page/ForgotPassword/ForgotPassword";
import { Profile } from "./Components/Page/Profile/Profile"
import { Anouncement } from "./Components/Page/Anouncement/Anouncement";
import  {StarRating}  from "./Components/UI/StarRating/StarRating";





function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< StarRating/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/anouncement" element={<Anouncement />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
