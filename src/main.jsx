import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
// import Dog from './Dog.jsx'
import Pokemon from './Pokemon.jsx'
import './index.css'

//const pokemonAray =['pikachu','ditto','eevee'];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pokemon/>
    {/* {pokemonAray.map((item)=> <Pokemon name={item}/>)} */}
    
  </StrictMode>,
)
