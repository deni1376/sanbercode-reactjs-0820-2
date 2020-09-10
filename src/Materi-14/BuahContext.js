import React, { useState, createContext } from "react";
i

export const BuahContext = createContext();

export const BuahProvider = props => {
  const [buah, setBuah] =  useState(null)

  const [inputForm, setInputForm] = useState({
    name: "",
    price: 0,
    weight:0,
    id: null
  })

  return (
    <BuahContext.Provider value={[buah, setBuah, inputForm, setInputForm]}>
      {props.children}
    </BuahContext.Provider>
  );
};