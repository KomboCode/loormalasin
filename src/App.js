import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./pages/footer";
import { MbugaContextProvider } from "./contexts/mbugaContext";
import Single from "./pages/single";
import Hotel from "./pages/hotel";


const App = () => {
  return (
    <MbugaContextProvider>
      <section>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/single" element={<Single/>} />
            <Route path="/hotel" element={<Hotel/>} />
          </Routes>
          <Footer/>
      </section>
    </MbugaContextProvider>
  
  )
}

export default App;