import React from 'react'
import Card from './components/Card'
import logo from "./assets/p.svg"

const App = () => {
  return (
    <div className='h-screen w-screen grid grid-cols-4 gap-2'>
      <Card img={logo} title="Priyansu" posts={21} followers={"25k"} following={2}/>
      <Card img={logo} title="Priyansu" posts={21} followers={"25k"} following={2}/>
      <Card img={logo} title="Priyansu" posts={21} followers={"25k"} following={2}/>
      <Card img={logo} title="Priyansu" posts={21} followers={"25k"} following={2}/>
    </div>
  )
}

export default App
