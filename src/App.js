import './App.css';
import NavbarComponent from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

// import router for url routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import elements/pages
import Success from "./pages/Success"
import Store from "./pages/Store"
import Cancel from "./pages/Cancel"

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          {/* elements should be /pages, not /components */}
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />

        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
