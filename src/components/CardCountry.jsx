import React from 'react'
import axios from 'axios'

const CardCountry = ({countries}) => {

    console.log(countries)

    /**tarea 1 - desplegar la siguiente informacion
     * bandera del pais
     * nombre del pais
     * capital
     * habitantes
     * en que continente se encuentra
     */
    

  return (
    <div>
      <article>
       <header>
       <img src={countries?.[0].flags.svg} alt={countries?.[0].flags.svg} />
       </header>
       <h2>{countries?.[0].name.common}</h2>
       <ul>
        <li><span>Capital:</span> <span>{countries?.[0].capital}</span></li>
        <li><span>Poblacion:</span><span>{countries?.[0].population}</span></li>
        <li><span>Region:</span><span>{countries?.[0].region}</span></li>
       </ul>
      </article>
    </div>
  )
}

export default CardCountry