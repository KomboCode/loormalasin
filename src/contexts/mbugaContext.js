import { createContext, useState } from "react";
import Sally from "../data/sally";
import Hotels from "../data/hotels";

export const MbugaContext = createContext();


export const MbugaContextProvider = ({ children }) => {


    const [ single, setSingle ] = useState(Sally[0]);
    const [ hotel, setHotel ] = useState(Hotels[0]);

    const handleSingle = (value) => {
        setSingle(value);
    }

    const handleHotel = (value) => {
      setHotel(value);
    }

    return (
        <MbugaContext.Provider
          value={
            {
                single,
                handleSingle,
                hotel,
                handleHotel
            }
          }
        >{ children}</MbugaContext.Provider>
    )
}