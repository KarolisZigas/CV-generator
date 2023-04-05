import React, {useState} from 'react'
import "./BendraInformacija.css"

const BendraInformacija = (props) => {
  const logo = require('../logo513.png');
  const [rodyti, setRodyti] = useState(false);
  const pakeistiBusena = () => {
    props.paspaudimas();
  }
  return (
    <>
    <div className='header-hidden'>
    <a onClick={pakeistiBusena} className='header-hidden-a'><iconify-icon icon="ph:arrow-circle-down-left"></iconify-icon></a>
      <div className='header-hidden-pavadinimas'>
        <img className="header-hidden-nuotrauka"src={logo} alt="" />
        <h1>CV GENERATOR</h1>
      </div>
      <a></a>
    </div>
    <div id="pirmas-turinys-wrapper" className='turinys-wrapper'>
      <div className='input-div'>
        <h1>Užpildykite klausimyną</h1>
      </div>
    </div>
    <div className='turinys-wrapper'>
        <div className='input-div'>
            <h2>Bendra informacija</h2>
            <div className='vardas-parent '>
            <div className='vardas'>
                <label htmlFor="vardas">Vardas</label>
                <input id="vardas" className='bendr-inf' type="text" />
            </div>
            <div className='vardas'>
                <label htmlFor="pavarde">Pavardė</label>
                <input id="pavarde" className='bendr-inf' type="text" />
            </div>
            </div>
            <div className='vardas-parent '>
              <div className='vardas'>
                  <label className="" htmlFor="pozicija">Norima pozicija:</label>
                  <input id="pozicija" className="input-div-laukelis bendr-inf" type="text" />
              </div>
              <div className='vardas'>
                  <label className="" htmlFor="tel-nr">Telefono Nr.</label>
                  <input id="tel-nr" className="input-div-laukelis bendr-inf" type="text" />
              </div>
            </div>
            <label className="input-div-label" htmlFor="saves-aprasymas">Trumpas savęs aprašymas</label>
            <textarea id="saves-aprasymas" className="input-div-laukelis bendr-inf" name="" cols="30" rows="10"></textarea>
            <label className="input-div-label" htmlFor="el-pastas">Elektroninis paštas</label>
            <input id="el-pastas" className="input-div-laukelis bendr-inf"type="email" />
            <label className="input-div-label" htmlFor="linked-in">LinkedIn profilio link</label>
            <input id="linked-in" className="input-div-laukelis bendr-inf"type="link" />
        </div>
    </div>
    </>
  )
}

export default BendraInformacija