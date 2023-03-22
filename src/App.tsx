import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as C from "./contexts";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import History from "./pages/History";
import Integrantes from "./pages/Integrantes";
import Acervo from "./pages/Acervo";
import Manutencao from "./pages/Manutencao";

function App() {
  return (
    <BrowserRouter>
      <C.MidiasProvider>
        <C.LoaderProvider>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/history"} element={<History />} />
            <Route path={"/integrantes"} element={<Integrantes />} />
            <Route path={"/acervo"} element={<Acervo />} />
            <Route path={"/manutencao"} element={<Manutencao />} />
          </Routes>
          <Footer />
        </C.LoaderProvider>
      </C.MidiasProvider>
    </BrowserRouter>
  );
}

export default App;
