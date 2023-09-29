import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../context"
import { OrderCard } from "./OrderCard"
import { totalPrice } from "../utils"
import { Link } from "react-router-dom"


export const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
    context.closeCheckoutSideMenu()
    context.setSearchByTitle(null)
    context.setSearchByCategory(null)

  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-90px)]`}>
      <div className=' flex justify-between items-center p-6'>
        <h2 className='text-xl font-medium'>My Order</h2>
        <div onClick={() => context.closeCheckoutSideMenu()}>
          <XMarkIcon className='w-6 h-6 text-black cursor-pointer' ></XMarkIcon>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.cartProducts.map((product) => (
            <OrderCard
              title={product.title}
              price={product.price}
              imageUrl={product.image1}
              key={product.id}
              id={product.id}
              handleDelete={handleDelete}
            />
          )
          )
        }
      </div>

      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='my-orders/last'>
          <button
            className='w-full py-3  text-white bg-black rounded-lg'
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>

        </Link>

      </div>

    </aside>
  )
}


