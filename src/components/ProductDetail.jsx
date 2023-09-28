import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../context"


export const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)


  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}>
      <div className=' flex justify-between items-center p-6'>
        <h2 className='text-xl font-medium'>Product Detail</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className='w-6 h-6 text-black cursor-pointer' ></XMarkIcon>
        </div>


      </div>
      <figure className='px-6'>
        <img
          src={context.productToShow.image1}
          alt={context.productToShow.title}
          className='w-full h-full object-cover rounded-lg'
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2' >${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}


