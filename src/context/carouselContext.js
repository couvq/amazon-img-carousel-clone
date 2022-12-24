import { createContext, useState } from "react";

const CarouselContext = createContext();

export const CarouselProvider = ({children}) => {
    const [images, setImages] = useState([
       "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/3640734/pexels-photo-3640734.jpeg?auto=compress&cs=tinysrgb&w=800",
       "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]);

    return (
        <CarouselContext.Provider value={{ images }}>
            {children}
        </CarouselContext.Provider>
    )
}

export default CarouselContext;