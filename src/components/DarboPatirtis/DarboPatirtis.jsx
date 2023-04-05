import React, { useState } from 'react'
import "./DarboPatirtis.css"

const DarboPatirtis = (props) => {
  const [zymeta, setZymeta] = useState(false);
  const handleClick = () => {
    console.log(document.getElementById("pabaigos-data"));
    if(!document.getElementById("pabaigos-data").hasAttribute("disabled")){
      document.getElementById("pabaigos-data").disabled = "true";
      document.getElementById("dabar-dirbama").innerHTML = "Įmonė, kurioje dirbama"
      setZymeta(true);
      props.zymejimas(zymeta);
    }
    else{
      document.getElementById("pabaigos-data").removeAttribute("disabled");
      document.getElementById("dabar-dirbama").innerHTML = "Įmonė, kurioje dirbta"
      setZymeta(false);
      props.zymejimas(zymeta);
    } 
  }
 
  let kiekis = 2;
  const pridetiDarba = () => {
      document.getElementById("rezultatu-div-patirtis").innerHTML += 
    `<div class="darbas skirtukas"> <h3>Darbo vieta Nr. ${kiekis} </h3> <div class='vardas-parent'> <div class='vardas'> <label for="darbo-pozicija${kiekis}">Pozicija darbe</label> <input type="text" id="darbo-pozicija${kiekis}" class="input-div-laukelis pozicija-darbe${kiekis} pozicija" /> </div> <div class='vardas'> <label for="darbo-vieta${kiekis}">Įmonė, kurioje dirbta</label> <input type="text" id="darbo-vieta${kiekis}" class="input-div-laukelis imone-dirbta${kiekis}" /> </div> </div> <div class="vardas-parent"> <div class="vardas"> <label for="pradzios-data${kiekis}">Pradžios data:</label> <input class="pradzios-data${kiekis}" id="pradzios-data${kiekis}"  type="date" max="2023-01-31"/> </div> <div class="vardas"> <label for="pabaigos-data${kiekis}">Pabaigos data:</label> <input class="pabaigos-data${kiekis}" id="pabaigos-data${kiekis}"  type="date" /> </div> </div> <div class='textarea'> <label for="darbo-pobudis${kiekis}">Darbo pobūdis</label> <textarea class="input-div-laukelis darbo-pobudis${kiekis}" name="" id="darbo-pobudis${kiekis}" cols="20" rows="8" style="margin: 10px 0 0;"></textarea> </div> </div>`
    kiekis++;
    document.getElementById("rezultatu-div-patirtis").style = {display: "block"}
    document.getElementsByClassName("darbas")[document.getElementsByClassName("darbas").length-1].scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "center"
  })
  }
  const pasalintiDarba = () => {
    kiekis <= 2? kiekis = 2 :  kiekis--
    document.getElementById("rezultatu-div-patirtis").innerHTML = ``;
    for (let i = 1; i <= kiekis-2; i++){
      document.getElementById("rezultatu-div-patirtis").innerHTML += `<div class="darbas skirtukas"> <h3>Darbo vieta Nr. ${i+1} </h3> <div class='vardas-parent'> <div class='vardas'> <label for="darbo-pozicija${i+1}">Pozicija darbe</label> <input type="text" id="darbo-pozicija${i+1}" class="input-div-laukelis pozicija-darbe${i+1} pozicija" /> </div> <div class='vardas'> <label for="darbo-vieta${i+1}">Įmonė, kurioje dirbta</label> <input type="text" id="darbo-vieta${i+1}" class="input-div-laukelis imone-dirbta${i+1}" /> </div> </div> <div class="vardas-parent"> <div class="vardas"> <label for="pradzios-data${i+1}">Pradžios data:</label> <input class="pradzios-data${i+1}" id="pradzios-data${i+1}" type="date" max="2023-01-31"/> </div> <div class="vardas"> <label for="pabaigos-data${i+1}">Pabaigos data:</label> <input class="pabaigos-data${i+1}" id="pabaigos-data${i+1}" type="date" /> </div> </div> <div class='textarea'> <label for="darbo-pobudis${i+1}">Darbo pobūdis</label> <textarea class="input-div-laukelis darbo-pobudis${i+1}" name="" id="darbo-pobudis${i+1}" cols="20" rows="8" style="margin: 10px 0 0;"></textarea> </div> </div>`
    }
    if (document.getElementById("rezultatu-div-patirtis").innerHTML === ``){
      document.getElementById("rezultatu-div-patirtis").style.display = "none";
    }
    document.getElementsByClassName("darbas")[document.getElementsByClassName("darbas").length-1].scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "center"
    })
  }
  return (
    <div id="darbo-patirtis-div" className='turinys-wrapper'>
        <div className='input-div'>
          <div className="absoliutus">
            <div className="pasalinti">
              <iconify-icon onClick={pasalintiDarba} icon="ph:x-circle-thin"></iconify-icon>
              <h4>Pašalinti paskutinę darbovietę</h4>
            </div>
            <div className='prideti'>
              <iconify-icon className="ikona" onClick={pridetiDarba} icon="ph:plus-circle-light"></iconify-icon>
              <h4>Pridėti kitą darbovietę</h4>
            </div>
          </div>
          <div className='pavadinimas'>
            <iconify-icon className="ikona" onClick={pridetiDarba} icon="ph:plus-circle-light"></iconify-icon>
            <h2>Darbo patirtis</h2>
            <iconify-icon onClick={pasalintiDarba} icon="ph:x-circle-thin"></iconify-icon>
          </div>
            <h3>Paskutinė darbo vieta</h3>
            <div className="darbas">
              <div className='check'>
                <div>
                  <input onClick={handleClick}type="checkbox" />
                  <label htmlFor="">Dabartinis darbas</label>
                </div>
              </div>
              <div className='vardas-parent'>
                <div className='vardas'>
                <label htmlFor="darbo-pozicija">Pozicija darbe</label>
                  <input type="text" id="darbo-pozicija" className="input-div-laukelis pozicija-darbe1 pozicija" />
                </div>
                <div className='vardas'>
                <label id="dabar-dirbama"htmlFor="darbo-vieta">Įmonė, kurioje dirbta</label>
                  <input type="text" id="darbo-vieta" className="input-div-laukelis imone-dirbta1" />
                </div>
              </div>
              <div className="vardas-parent">
                <div className="vardas">
                    <label htmlFor="pradzios-data">Pradžios data:</label>
                    <input id="pradzios-data" className='pradzios-data1' type="date" max="2023-01-31"/>
                </div>
                <div className="vardas">
                    <label htmlFor="pabaigos-data">Pabaigos data:</label>
                    <input id="pabaigos-data" className="pabaigos-data1" type="date" />
                </div>
              </div>
              <div className='textarea'>
                <label htmlFor="darbo-pobudis1">Darbo pobūdis</label>
                <textarea className="input-div-laukelis darbo-pobudis1" name="" id="darbo-pobudis1" cols="20" rows="8" style={{margin: "10px 0 0"}}></textarea>          
              </div>
            </div>
        </div>
        <div id="rezultatu-div-patirtis" className='input-div nerodyti' style={{display: "none"}}>
          
        </div>
    </div>
  )
}

export default DarboPatirtis