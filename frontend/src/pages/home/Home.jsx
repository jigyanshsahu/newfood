import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import foodDisplay from '../../components/food-display/foodDisplay'
import Appdownload from '../../components/appdownload/Appdownload'
const home = () => {
  const [category, setCategory] = useState("ALL")
  return (
    <div>
      <Header/> 
      <Exploremenu category={category} setCategory={setCategory}/>
      <foodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default home
