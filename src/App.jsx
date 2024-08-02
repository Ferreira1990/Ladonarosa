import './App.css'
import Otros from './components/confort/Otros'
import Headerx from './components/header/Headerx'
import Lavalozas from './components/lavalozas/Lavalozas'
import Main from './components/main/Main'
import Products from './components/products/Products'

import WSP from '../src/assets/wspicon.webp'

function App() {

  const numerowsp = '56966601158'; // Define el número de teléfono en formato internacional

  return (
    <>
      <div className='Boxwsp'> 
        <a className='Btnwsp' href={`https://wa.me/${numerowsp}`} target="_blank" rel="noopener noreferrer">
          <img className='wspimagebtn' src={WSP} alt="WhatsApp" />
        </a>  
        <Headerx />
        <Main />
        <Products />
        <Lavalozas />
        <Otros />
      </div>
    </>
  )
}

export default App
