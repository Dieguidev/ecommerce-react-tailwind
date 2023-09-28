
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Count of products in cart
  const [count, setCount] = useState(0);

//Open or Close aside productDetail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  }
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  }

  //Open or Close aside checkoutSideMenu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  }
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  }

//Product to show in productDetail
  const [productToShow,setProductToShow] = useState({})

  //Products in cart
  const [cartProducts,setCartProducts] = useState([])


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );

}
