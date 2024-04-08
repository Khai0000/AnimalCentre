import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { useState,useEffect,useRef } from "react";

const Layout = () => {
  const [spacing, setSpacing] = useState(0);
  const bodyRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const calculateSpacerHeight = () => {
      const headerHeight = document.querySelector("header").clientHeight;
      const outletHeight = document.querySelector("main").clientHeight;
      const totalHeight = window.innerHeight;

      let spacerHeight = 0;

      if (outletHeight + headerHeight < totalHeight) {
        spacerHeight = totalHeight - outletHeight - headerHeight;
        setSpacing(spacerHeight);
      }
      else
      {
        setSpacing(0);
      }
    };

    calculateSpacerHeight();
  }, [location,bodyRef.current?.clientHeight]);

  return (
    <div className="App">
      <Header />
      <main ref={bodyRef}>
        <Outlet />
      </main>
      <div style={{height:spacing}}></div>
      <Footer />
    </div>
  );
};

export default Layout;
