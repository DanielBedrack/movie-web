import React, { useState } from 'react'
import { trending } from '../../mockData';
import Home from '../homes/Home';
import "./trending.css"

export const Trending = () => {
    const [items, setItems] = useState(trending)
  return (
    <>
        <section className='trending'>
            <Home items={items}/>
        </section>
    </>
  )
}
export default Trending;
