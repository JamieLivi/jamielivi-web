import React, { useState, useEffect, useMemo } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import "./App.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import API from "@aws-amplify/api";

import awsExports from "./aws-exports";
import Layout from "./components/Layout.tsx";
import Skills from "./components/Skills";
import LoadingContext from "./context/LoadingContext";

// library.add(faB)

API.configure(awsExports);

const App = () => {
  const [loading, setLoading] = useState(true);
  const value = useMemo(() => ({ loading, setLoading }), [loading, setLoading]);
  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <LoadingContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route index element={<LeagueStandings />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingContext.Provider>
  );
};

export default App;
