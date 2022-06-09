
import React from "react";
import {
  Routes,
  Route,
  HashRouter
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
import { ShareP } from "./Components/Page/Share/Share"
import { Page404 } from "./Components/Page/Page404/Page404";
import { ModalCreateAnouncement } from "./Components/Modal/ModalCreateAnouncement/ModalCreateAnouncement";
import { PreviewPage } from "./Components/Page/PreviewPage/PreviewPage";
import { UserProvider } from "./UserProvider/UserProvider";
import { SearchResults } from "./Components/Page/SearchResults/SearchResults";
import { OtherUser } from "./Components/Page/OtherUser/OtherUser";
import { SuportP } from "./Components/Page/Support/Suports";
import { CategoriesResult } from "./Components/Page/CategoriesResult/CategoriesResult";
import { PrivacyPolity } from "./Components/Page/PrivacyPolity/PrivacyPolity";



function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/passwordReset/" element={< PasswordResetForm />} />
          <Route exact path="/modifyPassword/" element={< ModifyPasswordForm />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/anouncement" element={<Anouncement />} />
          <Route exact path="/share" element={<ShareP />} />
          <Route exact path="*" element={<Page404 />} />
          <Route exact path='/createAnouncement' element={<ModalCreateAnouncement />} />
          <Route exact path='/Preview' element={<PreviewPage />} />
          <Route exact path='/result' element={<SearchResults />}/>
          <Route exact path='/support' element={<SuportP />}/>
          <Route exact path="/user/profile" element={<OtherUser />}/>
          <Route exact path='/categories/' element={<CategoriesResult />}/> 
          <Route exact path="/privacy&polity" element={<PrivacyPolity />}/>
        </Routes>
      </HashRouter>
    </UserProvider>
  );
}

export default App;
