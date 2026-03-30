import React from 'react'

    const App = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Submitted")
    }

    return (
        <div>
        <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-3 items-center'>
            <input className='border w-full p-2 ' type="text" placeholder='Type Name...'/>
            <input className='border w-full p-2 mb-2' type="email" placeholder='Type email...'/>
            <button type='submit' className='w-32 text-center border h-10 rounded-lg cursor-pointer'>Submit</button>
        </form>
        </div>
    )
    }

    export default App
