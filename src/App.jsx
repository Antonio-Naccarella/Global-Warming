import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Temperature from "./pages/Temperature"
import Methane from "./pages/Methane"
import Co2 from "./pages/Co2"
import No2 from "./pages/No2"
import Ice from "./pages/Ice"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/methane" element={<Methane />} />
        <Route path="/co2" element={<Co2 />} />
        <Route path="/no2" element={<No2 />} />
        <Route path="/polar-ice" element={<Ice />} />
      </Routes>
      <Footer />
    </main>
  )
}
