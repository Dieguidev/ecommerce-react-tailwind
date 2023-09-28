import { XMarkIcon } from "@heroicons/react/24/solid"

export const OrderCard = props => {

  const { id, title, imageUrl, price, handleDelete } = props

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img src={imageUrl} alt={title}
            className='w-full h-full object-cover rounded-lg'
          />
        </figure>
        <p className='text-sm font-light'></p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <XMarkIcon
        className='w-6 h-6 text-black cursor-pointer'
        onClick={()=>handleDelete(id)}
        ></XMarkIcon>
      </div>
    </div>
  )
}
