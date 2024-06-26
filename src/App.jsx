import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/MainHeding/Heading";
import Menu from "./components/Menu/Menu";
import Carousel from "./components/Carousel/Carousel";
import FastTitle from "./components/FastTitle/FastTitle";
import Update from "./components/Updatepart/Update";
import BottomCarousel from "./components/BottomCarousel/BottomCarousel";

function App() {
  const [count, setCount] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar y={y} />
      <Heading />
      <Menu y={y} />
      <Carousel y={y} />
      <Update />
      <FastTitle />
      <BottomCarousel y={y} />
    </>
  );
}

export default App;
