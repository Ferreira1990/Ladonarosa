import React from 'react'
import '../confort/Otros.css'

import ESCO from '../../assets/esco.jpg'
import ESCOX from '../../assets/escox.jpg'
import CONFORT from '../../assets/confort.jpg'

const Otros = () => {
  return (
    <>
    <div className='Containerotros'>
 
        <div className='boxtitulootros'>
        <h1>Otros</h1>
        <div className='lineadivisorotros'></div> 
        </div>

        <div className='Boxproductsotros'>

            {/* PRIMER PRODUCTO */}
            <div className='CardsProductslavaloza'>

                            <div className='Boxcardimageproductlavaloza'>
                                <img className='lavaloza' src={ESCO} alt="" />
                            </div>

                            <div className='Productpricelavaloza'>
                                <h4>2.990$</h4>
                            </div>
                            <div className='Productdescriptionlavaloza'>
                               <p>
                               Escobillon Economico Azul Virutex</p>
                            </div>                         

                        </div>

                        {/* SEGUNDO PRODUCTO */}

                        <div className='CardsProductslavaloza'>
                
                <div className='Boxcardimageproductlavaloza'>
                    <img className='lavaloza' src={ESCOX} alt="" />
                </div>

                <div className='Productpricelavaloza'>
                    <h4>3.490$</h4>
                </div>
                <div className='Productdescriptionlavaloza'>
                   <p>
                   Escobillon Virutex</p>
                </div>                         

            </div>

            {/* TERCERPRODUCTOOOOOOOOOOOOOOOOOOOOOOOO */}

            <div className='CardsProductslavaloza'>
                
                <div className='Boxcardimageproductlavaloza'>
                    <img className='lavaloza' src={CONFORT} alt="" />
                </div>

                <div className='Productpricelavaloza'>
                    <h4>4.990$</h4>
                </div>
                <div className='Productdescriptionlavaloza'>
                   <p>
                   Papel Higienico Doble Hoja Confort 8rollos x 40metros</p>
                </div>                         

            </div>


        </div>
        </div>
    </>  
  )
}

export default Otros