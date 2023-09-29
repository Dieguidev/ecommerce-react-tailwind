import { useContext } from "react"
import { ShoppingCartContext } from "../context"
import { OrderCard } from "../components/OrderCard"
import { Link } from "react-router-dom"

export const MyOrders = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <div>
      <div className='flex items-center w-80 relative justify-center'>
        <h1>My Orders</h1>
      </div>
      <div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrderCard
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
