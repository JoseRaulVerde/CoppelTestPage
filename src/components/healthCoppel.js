import React from 'react'
import logoHealdCoppel from '../icons/logo-coppel-salud.svg'
import '../css/healthCoppel.css'
import Products from '../icons/coppel-salud-vector.svg'
import healthFamily from '../icons/coppel-salud-familia.png'

const HealthCopel = () => {
  return (
    <div className='body'>
      <div className='bodyImage'>
        <div className='HealthCoppelIconContainer'>
          <img src={logoHealdCoppel} alt="Health Coppel"/>
          <h3>
            Tu salud y la de tu familia es lo mas importante 
          </h3>
        </div>
        <div>
          <img src={Products}/> 
        </div>
      </div>
      <div className='coppelHealthInfo'>
        <div>
          <img style={{height: '250px'}} src={healthFamily} />
        </div>
        <div >
          <h5> ¿Que es coppel Salud?</h5>
          <p>Es la opcion facil y accesible para que tu familia reciban 
            productos y servicios de salud que ne
          </p>
       
        </div>
      </div>
      
    </div>
  )
}

export default HealthCopel
