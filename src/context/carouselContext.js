import { createContext, useState } from "react";

const CarouselContext = createContext();

export const CarouselProvider = ({children}) => {
    const [images, setImages] = useState([
        "https://zme-caps.amazon.com/t/sJPu7Ka8J959/HAv2N8OUj_he_vL72wuVdJFgRWn57Oduy7yZHTar8v8/17",
        "https://zme-caps.amazon.com/t/66mqHvoGwpOM/NEXUu2lKq3CvosM3pPJb3bae6to7wug7Q5P7-JVgF9E/17",
        "https://zme-caps.amazon.com/t/8NEZCIRiFCq5/OuTerH3ueia0EywiJ6vHTGrSy66l3q4H-fDsVpV45ck/17",
        "https://zme-caps.amazon.com/t/sLaTqE2pND72/Ds0P7G3_i1r4YuL6DLZQkCwE_6hlwusnIPQbD7kV3uk/17",
        "https://zme-caps.amazon.com/t/f1Ra8ZpdjLzQ/GMOstyAiITZ5YZMYPJOgk8A6KomNx3ebvioJMXUv8fU/17",
        "https://zme-caps.amazon.com/t/9zY0nZWQRWmx/raV5T_hM6bwanyLpFCJfH1kjbZ9o3yivE8x3mfvybXU/17"
    ]);

    return (
        <CarouselContext.Provider value={{ images }}>
            {children}
        </CarouselContext.Provider>
    )
}

export default CarouselContext;