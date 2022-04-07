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
import { PasswordResetForm } from "./Components/Layout/PasswordReset/PasswordResetForm";
import { ModifyPasswordForm } from "./Components/Layout/ConfirmModifyPassword/ModifyPasswordForm";
import {ShareP} from "./Components/Page/Share/Share"





function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/passwordReset" element={ < PasswordResetForm /> }/>
        <Route path="/modifyPassword" element={ < ModifyPasswordForm /> }/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/anouncement" element={<Anouncement />} />
        <Route path="/share" element={<ShareP/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
