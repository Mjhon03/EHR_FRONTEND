import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Contact } from "./Components/Page/Contact/Contact";
import { Home } from "./Components/Page/Home/Home";
import { Login } from "./Components/Page/Login/Login";
import { Register } from "./Components/Page/Register/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
