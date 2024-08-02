import React from 'react'
import '../main/Main.css'

import DELI from '../../assets/delivery.png'

const Main = () => {

  const numerowsp = '56966601158';

  return (
    <>
    <div className='ContainerMain'>
        <div className='Containermaintitle'>
            <h1 className='Titleladoñarosamain'>Mercado Doña Rosa</h1>
            <p className='parraphtitledoñarosa'>Delivery <span>GRATIS</span> en ñuñoa. <img className='deliveryimg' src={DELI} alt="" /></p>
            <a  href={`https://wa.me/${numerowsp}`}><button className='Btnmainbtn'>Haz tu pedido !</button></a>
            
        </div>
    </div>
    </>    
  )
}

export default Main