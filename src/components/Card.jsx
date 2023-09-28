import { useContext } from 'react'
import { ShoppingCartContext } from '../context'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'

export const Card = (data) => {

  const context = useContext(ShoppingCartContext)

  const showProduct = (produtDetail) => {
    context.openProductDetail()
    context.closeCheckoutSideMenu()
    context.setProductToShow(produtDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCartProducts([...context.cartProducts, productData])
    context.setCount(context.count + 1)
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }


  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter((product) => product.id === id).length > 0

    if (isInCart) {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
        >
          <CheckIcon className='w-6 h-6 text-white'></CheckIcon>
        </button>
      )
    } else {
      return (
        <button
        className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
        onClick={(event) => addProductsToCart(event, data)}
      >
        <PlusIcon className='w-6 h-6 text-black'></PlusIcon>
      </button>
      )

    }


  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category}</span>
        <img
          src={data.image1}
          alt={data.title}
          className='w-full h-full object-cover rounded-lg'
        />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  )
}
