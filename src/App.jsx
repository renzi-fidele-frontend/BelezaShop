import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contato from "./Pages/Contato/Contato";
import SaibaMais from "./Pages/SaibaMais/SaibaMais";
import Comprar from "./Pages/Comprar/Comprar";

function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/contato" element={<Contato />} />
               <Route path="/saiba-mais" element={<SaibaMais />} />
               <Route path="/comprar" element={<Comprar />} />
               <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
