import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Navigation from "./Templates/Navigation/Navigation";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
