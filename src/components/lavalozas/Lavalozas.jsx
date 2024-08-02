import React from 'react'
import '../lavalozas/Lavalozas.css'

import QUIX from '../../assets/quix.webp'
import CLOROCIF from '../../assets/cloro.jpg'
import CLOROCIFN from '../../assets/clorox.jpg'

const Lavalozas = () => {
  return (
    <>
    <div className='Containerlavalozas'>
        <div className='boxtitulolavalozas'>
        <h1>Lavalozas y cloros</h1>
        <div className='lineadivisordetergentes'></div> 
        </div>
        <div className='Boxproductlavalozas'>

            {/* PRIMER PRODUCTO */}
            <div className='CardsProductslavaloza'>
                            <div className='Boxcardimageproductlavaloza'>
                                <img className='lavalozaquix' src={QUIX} alt="" />
                            </div>

                            <div className='Productpricelavaloza'>
                                <h4>1.790$</h4>
                            </div>
                            <div className='Productdescriptionlavaloza'>
                               <p>
                                Lavalozas Quix Limon 500 Ml</p>
                            </div>
                          

                        </div>

                        {/* Segundo PRODUCTO */}
                        <div className='CardsProductslavaloza'>
                            <div className='Boxcardimageproductlavaloza'>
                                <img className='lavaloza' src={CLOROCIF} alt="" />
                            </div>

                            <div className='Productpricelavaloza'>
                                <h4>1.990$</h4>
                            </div>
                            <div className='Productdescriptionlavaloza'>
                               <p>
                               Cloro Gel Cif Lavanda 800 Ml</p>
                            </div>
                          

                        </div>

                        {/* TERCER PRODUCTO */}

                        <div className='CardsProductslavaloza'>
                            <div className='Boxcardimageproductlavaloza'>
                                <img className='lavaloza' src={CLOROCIFN} alt="" />
                            </div>

                            <div className='Productpricelavaloza'>
                                <h4>1.990$</h4>
                            </div>
                            <div className='Productdescriptionlavaloza'>
                               <p>
                               Cloro Gel Cif Tradicional 800 Ml</p>
                            </div>
                          

                        </div>
            
        </div>
      
    </div>
    </>  
  )
}

export default Lavalozas