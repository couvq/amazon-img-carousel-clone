import "./App.css";
import { useState } from "react";
import ImgCarousel from "./components/ImgCarousel";
import { CarouselProvider } from "./context/carouselContext";
import Counter from "./components/Counter";
import CountBtn from "./components/CountBtn";
import Dummy from "./components/Dummy";

const App = () => {
  console.log("app rendered")

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Counter count={count} />
        <CountBtn count={count} setCount={setCount}/>
        <Dummy />
      </div>
      <CarouselProvider>
        <ImgCarousel />
      </CarouselProvider>
    </>
  );
};

export default App;
