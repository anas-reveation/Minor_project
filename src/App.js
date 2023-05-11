import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Conatct from "./Pages/Contact";
import ErrorPage from "./Components/ErrorPage";
import Footer from "./Components/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Conatct />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
