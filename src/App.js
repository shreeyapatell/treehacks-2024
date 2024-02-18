import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageWithLabel from './components/grid';
import kitchen from './assets/kitchen.png';
import farm from './assets/farm.png';
import DetailPage from './components/DetailPage';
import AboutPage from './components/AboutPage';
import InstructionsPage from './components/InstructionsPage';
import DisplayImages from './components/DisplayImages';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import Navbar from "./Navbar";


const App = () => {
  return (
    
    <Router>
      <div className="App">
      {/* <Navbar bg="light" variant={"light"} expand="lg">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Navbar> */}

        <Navbar />
          <a href="/"></a>

        <header className="App-header">
          {/* <h1 className="title"><a href="/">Memory Playground</a></h1> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:label" element={<DetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/instructions" element={<InstructionsPage />} />
            <Route path="/displayimages" element={<DisplayImages />} />

          </Routes>
        </header>

      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <>
      <ImageWithLabel imageUrl={kitchen} label="kitchen" />
      <ImageWithLabel imageUrl={farm} label="farm" />
    </>
  );
};

export default App;
