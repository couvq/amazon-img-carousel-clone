import "./App.css";
import ImgCarousel from "./components/ImgCarousel";
import { CarouselProvider } from "./context/carouselContext";

const App = () => {
  return (
    <>
      <CarouselProvider>
        <ImgCarousel />
      </CarouselProvider>
    </>
  );
};

export default App;
