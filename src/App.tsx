import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as C from "./contexts";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <C.LoaderProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/history"} element={<History />} />
        </Routes>
        <Footer />
      </C.LoaderProvider>
    </BrowserRouter>
  );
}

export default App;
