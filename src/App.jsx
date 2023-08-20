import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contato from "./Pages/Contato/Contato";
import Comprar from "./Pages/Comprar/Comprar";
import Sobre from "./Pages/Sobre/Sobre";
import TrocasDevolucoes from "./Pages/TrocasDevolucoes/TrocasDevolucoes";
import PoliticaVendas from "./Pages/PoliticaVendas/PoliticaVendas";
import OculosBeleza from "./Pages/OculosBeleza/OculosBeleza";

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/contato" element={<Contato />} />
               <Route path="/comprar/beleza-oculos" element={<Comprar />} />
               <Route path="/sobre" element={<Sobre />} />
               <Route path="/trocas-e-devolucoes" element={<TrocasDevolucoes />} />
               <Route path="/politica-de-vendas" element={<PoliticaVendas />} />
               <Route path="/oculos-beleza" element={<OculosBeleza />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
