import React, { useState } from 'react'
import { homeData } from '../../mockData'
import HomePage from './Home'
import "./homes.css"

export const Homes = () => {
    const [items, setItems] = useState(homeData)
  return (
    <>
        <section className='home'>
            <HomePage items={items} />
        </section>
        <div className='margin'></div>
    </>
  )
}
export default Homes;
