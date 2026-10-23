import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

/* CREATE CONTEXT */

export const ShopContext = createContext();

/* PROVIDER */

const ShopContextProvider = ({ children }) => {

  

  const navigate = useNavigate();

  
      



  /* CONTEXT VALUE */

  const value = {
    products
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;