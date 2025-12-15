import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../components/food-display/FoodDisplay'
import Appdownload from '../../components/appdownload/Appdownload'
const home = () => {
  const [category, setCategory] = useState("ALL")
  return (
    <div>
      <Header/> 
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default home
