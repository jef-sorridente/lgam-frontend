//Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

//Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import About from "./Pages/About";
//import Affiliated from "./Pages/Affiliated";
import Form from "./Components/Form";
import Championships from "./Pages/Championships";
import Gallery from "./Pages/Gallery";
import Ranking from "./Pages/Ranking";
import Contact from "./Pages/Contact/contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          {/*<Route path="/afiliados" element={<Affiliated />} />*/}
          <Route path="/afiliados" element={<Form />} />
          <Route path="/eventos" element={<Championships />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
