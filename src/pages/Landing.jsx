import React from 'react'
import {fruits} from '../assets/fruits'
import FruitCardList from '../components/FruitCardList'


const Landing = () => {


  return (
    <>
      <FruitCardList fruits={fruits}/>
    </>
  )
}

export default Landing
