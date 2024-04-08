import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

const Home = lazy(() => import("./pages/Home/Home"))
const Cars = lazy(() => import("./pages/Cars/Cars"))

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback="Loading...">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cars" element={<Cars />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
