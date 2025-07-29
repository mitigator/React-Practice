import Home from "./pages/Home"
import Favourites from "./pages/Favourites"
import { FavouritesProvider } from "./context/FavouritesContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BlogDetails from "./pages/BlogDetails"
import ErrorBoundary from "./components/ErrorBoundary"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <FavouritesProvider>
      <Router>
        <div className="min-h-screen bg-slate-900 transition-colors flex flex-col">
          <ErrorBoundary>
            <Header />
            <main className="flex-1">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog/:id" element={<BlogDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/favorites" element={<Favourites />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </ErrorBoundary>
        </div>
      </Router>
    </FavouritesProvider>
  )
}

export default App
