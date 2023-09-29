import { ChevronRightIcon } from '@heroicons/react/24/solid'

export const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className='w-80 p-4 flex justify-between items-center  border border-black rounded-lg mb-4'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>01.02.23</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <ChevronRightIcon className='w-6 h-6 txet-black'></ChevronRightIcon>
        </p>
      </div>
    </div>
  )
}
