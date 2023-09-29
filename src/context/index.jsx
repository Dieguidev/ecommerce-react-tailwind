
import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  //get products from api
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  //get products from api by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  //products filtered
  const [filteredItems, setFilteredItems] = useState(null)
  const filterItemsbyTitle = (items, searchByTitle) => {
    return items.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filterItemsbyTitle(items, searchByTitle))
    else setFilteredItems(items)
  }, [items, searchByTitle])


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
  const [productToShow, setProductToShow] = useState({})

  //Products in cart
  const [cartProducts, setCartProducts] = useState([])

  //Shopping Cart-Order
  const [order, setOrder] = useState([])




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
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );

}
