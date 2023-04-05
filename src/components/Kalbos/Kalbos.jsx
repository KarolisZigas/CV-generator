import React from 'react'
import "./Kalbos.css"

const Kalbos = () => {
    let kiekis = 2;
    const pridetiKalbos = () => {
        if (kiekis === 2){
            document.getElementById("rezultatu-div-kalbos").innerHTML += `<div class="kalbos"> <h3> Papildomos kalbos </h3> <div class='vardas-parent'> <div id="kalbos-div" class='vardas'> <label for="kalba-ivestis${kiekis}">Kalba</label> <input type="text" id="kalba-ivestis${kiekis}" class="input-div-laukelis kalba-ivestis${kiekis} kalbos-cv" /> </div> <div id="lygis-div" class='vardas'> <form action=""> <label for="lygio-parinktis${kiekis}">Lygis</label> <select name="" id="lygio-parinktis${kiekis}" class="lygio-parinktis${kiekis}" style="margin: 5px 0 0"> <option value="Elementary Proficiency">Elementary Proficiency</option> <option value="Limited Working Proficiency">Limited Working Proficiency</option> <option value="Minimum Professional Proficiency">Minimum Professional Proficiency</option> <option value="Full Professional Proficiency">Full Professional Proficiency</option> <option value="Native or Bilingual Proficiency">Native or Bilingual Proficiency</option> </select> </form> </div> </div> </div>`
        }
        else {
            document.getElementById("rezultatu-div-kalbos").innerHTML += `<div class="kalbos"> <div class='vardas-parent'> <div id="kalbos-div" class='vardas'> <label for="kalba-ivestis${kiekis}">Kalba</label> <input type="text" id="kalba-ivestis${kiekis}" class="input-div-laukelis kalba-ivestis${kiekis} kalbos-cv" /> </div> <div id="lygis-div" class='vardas'> <form action=""> <label for="lygio-parinktis${kiekis}">Lygis</label> <select name="" id="lygio-parinktis${kiekis}" class="lygio-parinktis${kiekis}" style="margin: 5px 0 0"> <option value="Elementary Proficiency">Elementary Proficiency</option> <option value="Limited Working Proficiency">Limited Working Proficiency</option> <option value="Minimum Professional Proficiency">Minimum Professional Proficiency</option> <option value="Full Professional Proficiency">Full Professional Proficiency</option> <option value="Native or Bilingual Proficiency">Native or Bilingual Proficiency</option> </select> </form> </div> </div> </div>`
        }
        kiekis++;
        document.getElementById("rezultatu-div-kalbos").style = {display: "block"}
        document.getElementsByClassName("kalbos")[document.getElementsByClassName("kalbos").length-1].scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "center"
        })
    }
    const pasalintiKalbos = () => {
        kiekis <= 2? kiekis = 2 :  kiekis--
        document.getElementById("rezultatu-div-kalbos").innerHTML = ``;
        for (let i = 1; i <= kiekis-2; i++){
            if (i === 1){
                document.getElementById("rezultatu-div-kalbos").innerHTML += `<div class="kalbos"> <h3> Papildomos kalbos </h3> <div class='vardas-parent'> <div id="kalbos-div" class='vardas'> <label for="kalba-ivestis${i+1}">Kalba</label> <input type="text" id="kalba-ivestis${i+1}" class="input-div-laukelis kalba-ivestis${i+1} kalbos-cv" /> </div> <div id="lygis-div" class='vardas'> <form action=""> <label for="lygio-parinktis${i+1}">Lygis</label> <select name="" id="lygio-parinktis${i+1}" class="lygio-parinktis${i+1}" style="margin: 5px 0 0"> <option value="Elementary Proficiency">Elementary Proficiency</option> <option value="Limited Working Proficiency">Limited Working Proficiency</option> <option value="Minimum Professional Proficiency">Minimum Professional Proficiency</option> <option value="Full Professional Proficiency">Full Professional Proficiency</option> <option value="Native or Bilingual Proficiency">Native or Bilingual Proficiency</option> </select> </form> </div> </div> </div>`
            }
            else {
                document.getElementById("rezultatu-div-kalbos").innerHTML += `<div class="kalbos"> <div class='vardas-parent'> <div id="kalbos-div" class='vardas'> <label for="kalba-ivestis${i+1}">Kalba</label> <input type="text" id="kalba-ivestis${i+1}" class="input-div-laukelis kalba-ivestis${i+1} kalbos-cv" /> </div> <div id="lygis-div" class='vardas'> <form action=""> <label for="lygio-parinktis${i+1}">Lygis</label> <select name="" id="lygio-parinktis${i+1}" class="lygio-parinktis${i+1}" style="margin: 5px 0 0"> <option value="Elementary Proficiency">Elementary Proficiency</option> <option value="Limited Working Proficiency">Limited Working Proficiency</option> <option value="Minimum Professional Proficiency">Minimum Professional Proficiency</option> <option value="Full Professional Proficiency">Full Professional Proficiency</option> <option value="Native or Bilingual Proficiency">Native or Bilingual Proficiency</option> </select> </form> </div> </div> </div>`
            }
        }
        if (document.getElementById("rezultatu-div-kalbos").innerHTML === ``){
            document.getElementById("rezultatu-div-kalbos").style.display = "none";
        }
        document.getElementsByClassName("kalbos")[document.getElementsByClassName("kalbos").length-1].scrollIntoView({
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
                    <iconify-icon onClick={pasalintiKalbos} icon="ph:x-circle-thin"></iconify-icon>
                    <h4>Pašalinti paskutinę kalbą</h4>
                </div>
                <div className='prideti'>
                    <iconify-icon className="ikona" onClick={pridetiKalbos} icon="ph:plus-circle-light"></iconify-icon>
                    <h4>Pridėti papildomą kalbą</h4>
                </div>
            </div>
            <div className='pavadinimas'>
                <iconify-icon className="ikona" onClick={pridetiKalbos} icon="ph:plus-circle-light"></iconify-icon>
                <h2>Kalbos</h2>
                <iconify-icon onClick={pasalintiKalbos} icon="ph:x-circle-thin"></iconify-icon>
            </div>
            <div className="kalbos">
                <div className='vardas-parent'>
                    <div id="kalbos-div" className='vardas'>
                        <label htmlFor="kalba-ivestis">Kalba</label>
                        <input type="text" id="kalba-ivestis" className="input-div-laukelis kalba-ivestis1 kalbos-cv" />
                    </div>
                    <div id="lygis-div" className='vardas'>
                        <form action="">
                            <label htmlFor="lygio-parinktis">Lygis</label>
                            <select name="" className='lygio-parinktis1' id="lygio-parinktis" style={{margin: "5px 0 0"}}>
                                <option value="Elementary Proficiency">Elementary Proficiency</option>
                                <option value="Limited Working Proficiency">Limited Working Proficiency</option>
                                <option value="Minimum Professional Proficiency">Minimum Professional Proficiency</option>
                                <option value="Full Professional Proficiency">Full Professional Proficiency</option>
                                <option value="Native or Bilingual Proficiency">Native or Bilingual Proficiency</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="rezultatu-div-kalbos" className='input-div nerodyti' style={{display: "none"}}>
            
        </div>
    </div>
  )
}

export default Kalbos

