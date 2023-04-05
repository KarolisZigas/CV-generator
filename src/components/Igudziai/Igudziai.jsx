import React from 'react'
import "./Igudziai.css"

const Igudziai = () => {
    return (
    <div id="darbo-patirtis-div" className='turinys-wrapper'>
        <div className='input-div'>
            <div className='pavadinimas'>
                <h2>Įgūdžiai</h2>
            </div>
            <div className="igudziai">
              <div>
                <label htmlFor="igudziai-ivestis">Trumpai per kablelį aprašykite turimus įgudžius, tinkančius norimai darbo pozicijai.</label>
                <textarea className="input-div-laukelis" name="" id="igudziai-ivestis" cols="20" rows="8" style={{margin: "10px"}}></textarea>          
              </div>
            </div>
        </div>
    </div>
  )
}

export default Igudziai