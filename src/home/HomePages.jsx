import React, { useState } from 'react'
import Homes from "../components/homes/Homes"
import Upcomming from "../components/upcomming/Upcomming"
import Trending from '../components/trending/Trending'
import { latest, upcome, recommended } from '../mockData'

const HomePages = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return(
    <>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={recommended} title='Recommended Movies' />

    </>
  )
  
}
export default HomePages