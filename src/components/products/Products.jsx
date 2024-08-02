import React from 'react'
import '../products/Products.css'

import ARIEL from '../../assets/arielito.webp'
import ARIELDOWNY from '../../assets/arieldowny.webp'
import OMOCONCENTRADO from '../../assets/omoconcentrado.webp'
import SOFT from '../../assets/soft.jpg'

const Products = () => {
    return (
        <>
            <div className='ContainerProductsDoñaRosa'>
                <div className='Titulodeproductos'>
                    <h1>Productos</h1>
                    <div className='lineadivisor'></div>              
                </div>

                <div id='Productos' className='Boxofproducts'>
                    <h4>Detergentes</h4>

                    <div className='boxofcardsproducts'>

                        <div className='CardsProducts'>
                            <div className='Boxcardimageproduct'>
                                <img className='Huevos' src={ARIEL} alt="" />
                            </div>

                            <div className='Productprice'>
                                <h4>6.990$</h4>
                            </div>
                            <div className='Productdescription'>
                               <p>Detergente Líquido Ariel Doble Poder Concentrado de 1.8 L</p>
                            </div>
                          

                        </div>

                        <div className='CardsProducts'>
                            <div className='Boxcardimageproduct'>
                                <img className='Huevos' src={ARIELDOWNY} alt="" />
                            </div>

                            <div className='Productprice'>
                                <h4>6.990$</h4>
                            </div>
                            <div className='Productdescription'>
                               <p>Detergente Líquido Ariel Toque de Downy Más Perfume 1.8 L</p>
                            </div>
                         

                        </div>

                        {/* ---------------------------------------------------------------------------------------------------- */}


                        <div className='CardsProducts'>
                        <div className='Boxcardimageproduct'>
                                <img className='lechecolunx' src={OMOCONCENTRADO} alt="" />
                            </div>

                            <div className='Productprice'>
                                <h4>4.490$</h4>
                            </div>

                            <div className='Productdescription'>
                               <p>Detergente Líquido Ultra Concentrado Para Diluir 500 Ml Omo</p>
                            </div>
                       

                        </div>

                        <div className='CardsProducts'>
                        <div className='Boxcardimageproduct'>
                                <img className='lechecolun' src={SOFT} alt="" />
                            </div>

                            <div className='Productprice'>
                                <h4>2.690$</h4>
                            </div>

                            <div className='Productdescription'>
                               <p>Suavizante Normal Soft 1 Lt</p>
                            </div>
                       

                        </div>

                              

                    </div>

                </div>
            </div>
        </>

    )
}

export default Products