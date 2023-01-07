import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Landing from "./Pages/Landing/Landing";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Hackerbg from "./Components/Hackerbg";
function App() {
  return (
    <div className="App">
      <Header />
      <Hackerbg />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
