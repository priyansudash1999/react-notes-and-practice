import React from 'react'

const Card = ({name, email}) => {
  return (
    <div className='bg-amber-300 px-4 py-2 text-center'>
      <h1 className='text-2xl mb-2'>Card</h1>
      <p className=''>Hello I am {name}'s card</p>
      <p>{email}</p>
    </div>
  )
}

export default Card
