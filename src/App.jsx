import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <section className={`loaderWrapper ${!isLoaded ? "active" : "unactive"}`}>
        <div className="loader"></div>
      </section>
      <Nav />
      <Home />
    </>
  );
}

export default App;
