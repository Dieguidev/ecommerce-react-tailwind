import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductDetail } from "../components/ProductDetail"
import { ShoppingCartContext } from "../context"




export const Home = () => {

  const context = useContext(ShoppingCartContext)

//searchByTitle,setSearchByTitle
  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder='Search product'
        className='rounded-lg  border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          context.filteredItems?.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              category={item.category.name}
              image1={item.images[0]}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))
        }
      </div>
      <ProductDetail />
    </>

  )
}
