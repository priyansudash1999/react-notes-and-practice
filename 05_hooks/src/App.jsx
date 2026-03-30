import React from 'react'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState({name: "priyansu", age: 20})
  const handleIncrease = () => {
    setUser({...user, age: user.age+1})
    console.log(user)
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={() => handleIncrease()}>Click</button>
    </div>
  )
}

export default App
