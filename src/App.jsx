import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Smartphone from "./pages/Smartphone";
import Tablet from "./pages/Tablet";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dti/sau/product" element={<Product />} />
          <Route path="/product/smartphone" element={<Smartphone />} />
          <Route path="/product/tablet" element={<Tablet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

/*function App() {
  return (
    <div>App</div>
  )
}

export default App
*/

/*
const App = () => {
  return (
    <div>App</div>
  )
}

export default App
*/