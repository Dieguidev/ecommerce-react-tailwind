import { useContext } from "react"
import { ShoppingCartContext } from "../context"
import { OrderCard } from "../components/OrderCard"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

export const MyOrder = () => {

  const context = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length - 1

  return (
    <div>
      <div className='flex items-center w-80 mb-2 relative justify-center'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"  ></ChevronLeftIcon>
        </Link>
        <h1>My Order</h1>

      </div>
      <div className='flex flex-col w-80'>
        {
          context.order[index]?.products.map((product) => (
            <OrderCard
              title={product.title}
              price={product.price}
              imageUrl={product.image1}
              key={product.id}
              id={product.id}
            />
          )
          )
        }
      </div>
    </div>

  )
}
