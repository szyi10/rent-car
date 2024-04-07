import { lazy } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

const Home = lazy(() => import("./pages/Home/Home"))

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
