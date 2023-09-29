import { useContext } from "react"
import { ShoppingCartContext } from "../context"
import { Link } from "react-router-dom"
import { OrdersCard } from "../components/OrdersCard"

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <div>
      <div className='flex items-center w-80 relative justify-center mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      <div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
      </div>

    </div>
  )
}
