import React, { Suspense, useEffect, useState } from "react";
import StoreProvider, { StoreContext } from "./store/StoreProvider";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Realization from "./components/Realization/Realization";
import About from "./components/About/About"; 
import Contact from "./components/Contact/Contact"; 
import Article from "./components/Article/Article";
import Oknoplast from "./components/Okoplast/Oknoplast";

const App = () => {
    const [isMobile, setIsMobile] = useState(false)


    const handleIsMoblie =()=>{
        if (window.innerWidth <= 960 & window.innerWidth>window.innerHeight) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(()=>{
        handleIsMoblie()
    }, [])

    window.addEventListener('resize',handleIsMoblie)



  return (
    isMobile?
    <div className={"overlay"}><i className="fas fa-sync-alt"></i> <p>Obróć swoje urządzenie</p></div>
    :
    <Router>
      <StoreProvider>
        <Suspense fallback={<div style={{height: "100vh"}}>Loading...</div>}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Navbar />
                  <Home />
                  <Footer />
                </>
              )}
            />
            <Route
              path="/product"
              exact
              render={() => (
                <>
                  <Navbar />
                  <Product />
                  <Footer />
                </>
              )}
            />
            <Route
              path="/realizations"
              exact
              render={() => (
                <>
                  <Navbar />
                  <Realization />
                  <Footer />
                </>
              )}
            />
            <Route
              path="/about"
              exact
              render={() => (
                <>
                  <Navbar />
                  <About />
                  <Footer />
                </>
              )}
            />
            <Route
              path="/contact"
              exact
              render={() => (
                <>
                  <Navbar />
                  <Contact />
                  <Footer />
                </>
              )}
            />
            <Route
              path="/articles"
              exact
              render={() => (
                <>
                  <Navbar />
                  <Article />
                  <Footer />
                </>
              )}
            />
            <Route
              path="/oknoplast"
              exact
              render={() => (
                <>
                  <Navbar />
                  <Oknoplast />
                  <Footer />
                </>
              )}
            />
          </Switch>
        </Suspense>
      </StoreProvider>
    </Router>
  );
};
export default App;
