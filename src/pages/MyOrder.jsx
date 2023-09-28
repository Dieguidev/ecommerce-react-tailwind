import { useContext } from "react"
import { ShoppingCartContext } from "../context"
import { OrderCard } from "../components/OrderCard"

export const MyOrder = () => {

  const context = useContext(ShoppingCartContext)
  console.log(context.order.slice(-1)[0]?.products);

  return (
    <div className='flex flex-col w-80'>
      {
        context.order.slice(-1)[0]?.products.map((product) => (
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
  )
}
