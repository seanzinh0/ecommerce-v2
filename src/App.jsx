// import modules
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.jsx"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Contact from "./pages/Contact.jsx"

function App() {
  // Setup react router and use layout to put header and footer amongst all pages
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
