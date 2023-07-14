import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as C from "./contexts";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History";
import Integrantes from "./pages/Integrantes";
import Acervo from "./pages/Acervo";
import Manutencao from "./pages/Manutencao";
import Header2 from "./components/Header2";
import Loja from "./pages/Loja";

function App() {
  return (
    <BrowserRouter>
      <C.StoreProvider>
        <C.MidiasProvider>
          <C.LoaderProvider>
            <Header2 />
            <Routes>
              <Route index element={<Home />} />
              <Route path={"/galery"} element={<History />} />
              <Route path={"/integrantes"} element={<Integrantes />} />
              <Route path={"/acervo"} element={<Acervo />} />
              <Route path={"/loja"} element={<Loja />} />
              <Route path={"/manutencao"} element={<Manutencao />} />
            </Routes>
            <Footer />
          </C.LoaderProvider>
        </C.MidiasProvider>
      </C.StoreProvider>
    </BrowserRouter>
  );
}

export default App;
