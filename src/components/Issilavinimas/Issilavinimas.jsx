import React from 'react'

const Issilavinimas = (props) => {
    let kiekis = 2;
    const pridetiIssilavinima = () => {
        document.getElementById("rezultatu-div-issilavinimas").innerHTML += `<div class="issilavinimas skirtukas"> <h3> Programa Nr. ${kiekis} </h3> <div class='vardas-parent'> <div class='vardas'> <label for="programos-pavadinimas${kiekis}">Programos pavadinimas</label> <input type="text" id="programos-pavadinimas${kiekis}" class="input-div-laukelis programos-pavadinimas${kiekis} pavadinimas-input" /> </div> <div class='vardas'> <label for="mokymosi-istaiga${kiekis}">Mokymosi įstaiga</label> <input type="text" id="mokymosi-istaiga${kiekis}" class="input-div-laukelis mokymosi-istaiga${kiekis}" /> </div> </div> <div class="vardas-parent"> <div class="vardas"> <label for="pradzios-data-kursai${kiekis}">Pradžios data:</label> <input id="pradzios-data-kursai${kiekis}" class="pradzios-data-kursai${kiekis}" type="date" max="2023-01-31"/> </div> <div class="vardas"> <label for="pabaigos-data-kursai${kiekis}">Pabaigos data:</label> <input id="pabaigos-data-kursai${kiekis}" class="pabaigos-data-kursai${kiekis}" type="date" /> </div> </div> </div>`     
        kiekis++;
        document.getElementById("rezultatu-div-issilavinimas").style = {display: "block"}
        document.getElementsByClassName("issilavinimas")[document.getElementsByClassName("issilavinimas").length-1].scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "center"
        })
    }
    const pasalintiIssilavinima = () => {
        kiekis <= 2? kiekis = 2 :  kiekis--
        document.getElementById("rezultatu-div-issilavinimas").innerHTML = ``;
        for (let i = 1; i <= kiekis-2; i++){
            document.getElementById("rezultatu-div-issilavinimas").innerHTML += `<div class="issilavinimas skirtukas"> <h3> Programa Nr. ${i+1} </h3> <div class='vardas-parent'> <div class='vardas'> <label for="programos-pavadinimas${i+1}">Programos pavadinimas</label> <input type="text" id="programos-pavadinimas${i+1}" class="input-div-laukelis programos-pavadinimas${i+1} pavadinimas-input" /> </div> <div class='vardas'> <label for="mokymosi-istaiga${i+1}">Mokymosi įstaiga</label> <input type="text" id="mokymosi-istaiga${i+1}" class="input-div-laukelis mokymosi-istaiga${i+1}" /> </div> </div> <div class="vardas-parent"> <div class="vardas"> <label for="pradzios-data-kursai${i+1}">Pradžios data:</label> <input id="pradzios-data-kursai${i+1}" class="pradzios-data-kursai${i+1}" type="date" max="2023-01-31"/> </div> <div class="vardas"> <label for="pabaigos-data-kursai${i+1}">Pabaigos data:</label> <input id="pabaigos-data-kursai${i+1}" class="pabaigos-data-kursai${i+1}" type="date" /> </div> </div> </div>`
        }
        if (document.getElementById("rezultatu-div-issilavinimas").innerHTML === ``){
            document.getElementById("rezultatu-div-issilavinimas").style.display = "none";
        }
        document.getElementsByClassName("issilavinimas")[document.getElementsByClassName("issilavinimas").length-1].scrollIntoView({
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
                    <iconify-icon onClick={pasalintiIssilavinima} icon="ph:x-circle-thin"></iconify-icon>
                    <h4>Pašalinti paskutinę programą</h4>
                </div>
                <div className='prideti'>
                    <iconify-icon className="ikona" onClick={pridetiIssilavinima} icon="ph:plus-circle-light"></iconify-icon>
                    <h4>Pridėti papildomą programą</h4>
                </div>
            </div>
            <div className='pavadinimas'>
                <iconify-icon className="ikona" onClick={pridetiIssilavinima} icon="ph:plus-circle-light"></iconify-icon>
                <h2>Išsilavinimas ir kursai</h2>
                <iconify-icon onClick={pasalintiIssilavinima} icon="ph:x-circle-thin"></iconify-icon>
            </div>
            <div className="issilavinimas">
                <div className='vardas-parent'>
                    <div className='vardas'>
                        <label htmlFor="programos-pavadinimas">Programos pavadinimas</label>
                        <input type="text" id="programos-pavadinimas" className="input-div-laukelis programos-pavadinimas1 pavadinimas-input" />
                    </div>
                    <div className='vardas'>
                        <label htmlFor="mokymosi-istaiga">Mokymosi įstaiga</label>
                        <input type="text" id="mokymosi-istaiga" className="input-div-laukelis mokymosi-istaiga1" />
                    </div>
                </div>
                <div className="vardas-parent">
                <div className="vardas">
                    <label htmlFor="pradzios-data-kursai">Pradžios data:</label>
                    <input className="pradzios-data-kursai1" id="pradzios-data-kursai" type="date" max="2023-01-31"/>
                </div>
                <div className="vardas">
                    <label htmlFor="pabaigos-data-kursai">Pabaigos data:</label>
                    <input className='pabaigos-data-kursai1' id="pabaigos-data-kursai"  type="date" />
                </div>
                </div>
            </div>
        </div>
        <div id="rezultatu-div-issilavinimas" className='input-div nerodyti' style={{display: "none"}}>
            
        </div>
    </div>
  )
}

export default Issilavinimas