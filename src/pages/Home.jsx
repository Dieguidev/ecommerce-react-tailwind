import { useState, useEffect } from "react"
import { Card } from "../components/Card"
import { ProductDetail } from "../components/ProductDetail"




export const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])


  return (
    <>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => (
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
