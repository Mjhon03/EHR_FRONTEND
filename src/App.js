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
import { Page404 } from "./Components/Page/Page404/Page404";






function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< Home/>} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword/>} />
        <Route exact path="/passwordReset" element={ < PasswordResetForm /> }/>
        <Route exact path="/modifyPassword/" element={ < ModifyPasswordForm /> }/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/anouncement" element={<Anouncement />} />
        <Route exact path="/share" element={<ShareP/>}/>
        <Route exact path="*" element={<Page404/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
