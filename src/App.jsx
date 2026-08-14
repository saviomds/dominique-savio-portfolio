import { Routes, Route } from "react-router-dom"
import { Sidebar, MobileBar } from "./components/Sidebar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <div style={{ flex: 1, minWidth: 0 }}>
        <MobileBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
