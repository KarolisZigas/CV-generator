import React from 'react'
import Header from '../Header'
import "./Curriculum.css"
import html2canvas from "html2canvas"

const Curriculum = (props) => {
    const kitas = () => {
        props.clickas();
    }
    let issilavinimasPirmas = ((props.pagrindineInfo[2]).pirmas);
    let issilavinimasAntras = ((props.pagrindineInfo[2]).antras);
    let issilavinimasTrecias = ((props.pagrindineInfo[2]).trecias);
    let issilavinimasKetvirtas = ((props.pagrindineInfo[2]).ketvirtas);
    let issilavinimasPenktas = ((props.pagrindineInfo[2]).penktas);
let issilavinimasSestas = ((props.pagrindineInfo[2]).sestas);

  const spausdintiPDF =() => {
    const data = document.getElementById('curriculum');
    html2canvas(data).then((canvas) => {
        const imgWidth = 217;
        const pageHeight = 350;
        const imgHeight = (canvas.height * imgWidth / canvas.width)+20;
        const heightLeft = imgHeight;
        const { jsPDF } = require('jspdf');
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('cv.pdf'); 
    });
}
    // console.log(props.pagrindineInfo[4].pirma[1])
    const logo = require('../logo513.png');
  return (
    <div>
        <div className='Appsas'>
        <div className='header-hidden'>
        <a></a>
    <button onClick={kitas}><a className='header-hidden-a'>Grįžti į pradinį puslapį</a></button>
      <div className='header-hidden-pavadinimas'>
        <img className="header-hidden-nuotrauka"src={logo} alt="" />
        <h1>CV GENERATOR</h1>
      </div>
      <a></a>
    </div>
    <div className='headeris navbar-expand-lg'>
        <div className='headeris-virsus'></div>
        <div>
        <img className="headeris-nuotrauka"src={logo} alt="" />
        <h1>CV GENERATOR</h1>
        <div className='headeris-content'>
        </div>
        <div className='instrukcijos'>
            <ul><li>Norint išsisaugoti CV pdf formatu, sumažinkite naršyklės 
                priartinimą iki 0.75</li></ul>
        </div>
        <div className='headeris-mygtukai'>
            <button onClick={kitas}>Grįžti į pradinį puslapį</button>
            <button onClick={spausdintiPDF}>Generuoti PDF</button>
        </div>
        </div>
    </div>
    <div className="content">
        <div className='turinys-wrapper'>
            <div id="curriculum" className='curriculum'>
                <div className='header'>
                    <div className='pristatymas'>
                        <div className='pristatymas-vardas'>
                            <div>
                                <h1>{(props.pagrindineInfo[0]).vardas === ""? "Vardenis": (props.pagrindineInfo[0]).vardas} {(props.pagrindineInfo[0]).pavarde === ""? "Pavardenis": (props.pagrindineInfo[0]).pavarde}</h1>
                                <h2>{(props.pagrindineInfo[0]).pozicija === ""? "Norima darbo pozicija": (props.pagrindineInfo[0]).pozicija}</h2>
                            </div>
                        </div>
                        <div className='pristatymas-aprasymas'>
                            <p>{(props.pagrindineInfo[0]).aprasymas === ""? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat illum suscipit eius in ipsum optio architecto maxime numquam harum asperiores ex laudantium perspiciatis, temporibus beatae minus nam adipisci natus ab veritatis sit impedit commodi modi nemo? Sequi pariatur perspiciatis placeat.": (props.pagrindineInfo[0]).aprasymas}</p>
                            
                        </div>
                    </div>
                    <div className='kontaktai'>
                    <div>
                        <h3>El. Paštas</h3>
                        <a href="#">{(props.pagrindineInfo[0]).pastas === ""? "Jūsų el. paštas": (props.pagrindineInfo[0]).pastas}</a>
                    </div>
                    <div>
                        <h3>LinkedIn puslapis</h3>
                        <a href={(props.pagrindineInfo[0]).link === ""? "https://www.linkedin.com/": (props.pagrindineInfo[0]).link} target="_blank" >https://www.linkedin.com/</a>
                    </div>
                    <div>
                        <h3>Tel. nr.</h3>
                        <a href="#">{(props.pagrindineInfo[0]).tel === ""? "Jūsų tel. Nr.": (props.pagrindineInfo[0]).tel}</a>
                    </div>
                    </div>
                </div>
                <div className='curriculum-turinys'>
                    <div className='pirma-eile'>
                        <h4>Darbo patirtis</h4>
                        <div className="darbas" id="darbas1">
                            <h5>{((props.pagrindineInfo[1]).pirmas[0]) === ""? "Pareigos": ((props.pagrindineInfo[1]).pirmas[0])}</h5> 
                            <h6>{((props.pagrindineInfo[1]).pirmas[1]) === ""? "Įmonė": ((props.pagrindineInfo[1]).pirmas[1])}{((props.pagrindineInfo[1]).pirmas[2]) === undefined? null: ","} {((props.pagrindineInfo[1]).pirmas[2]) === ""? "Pradžios data": ((props.pagrindineInfo[1]).pirmas[2])} {((props.pagrindineInfo[1]).pirmas[2]) === undefined? null: "-"} {((props.pagrindineInfo[1]).pirmas[3]) === ""? "Pabaigos data": ((props.pagrindineInfo[1]).pirmas[3])}</h6> 
                            <p>{((props.pagrindineInfo[1]).pirmas[4]) === ""? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sit veniam ullam veritatis error suscipit dignissimos vitae sint quidem qui.": ((props.pagrindineInfo[1]).pirmas[4])}</p>
                        </div>
                        <div className="darbas" id="darbas2">
                            <h5>{((props.pagrindineInfo[1]).antras[0]) === ""? "Pareigos": ((props.pagrindineInfo[1]).antras[0])}</h5> 
                            <h6>{((props.pagrindineInfo[1]).antras[1]) === ""? "Įmonė": ((props.pagrindineInfo[1]).antras[1])}{((props.pagrindineInfo[1]).antras[2]) === undefined? null: ","} {((props.pagrindineInfo[1]).antras[2]) === ""? "Pradžios data": ((props.pagrindineInfo[1]).antras[2])} {((props.pagrindineInfo[1]).antras[2]) === undefined? null: "-"} {((props.pagrindineInfo[1]).antras[3]) === ""? "Pabaigos data": ((props.pagrindineInfo[1]).antras[3])}</h6> 
                            <p>{((props.pagrindineInfo[1]).antras[4]) === ""? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sit veniam ullam veritatis error suscipit dignissimos vitae sint quidem qui.": ((props.pagrindineInfo[1]).antras[4])}</p>
                        </div>
                        <div className="darbas" id="darbas3">
                            <h5>{((props.pagrindineInfo[1]).trecias[0]) === ""? "Pareigos": ((props.pagrindineInfo[1]).trecias[0])}</h5> 
                            <h6>{((props.pagrindineInfo[1]).trecias[1]) === ""? "Įmonė": ((props.pagrindineInfo[1]).trecias[1])}{((props.pagrindineInfo[1]).trecias[2]) === undefined? null: ","} {((props.pagrindineInfo[1]).trecias[2]) === ""? "Pradžios data": ((props.pagrindineInfo[1]).trecias[2])} {((props.pagrindineInfo[1]).trecias[2]) === undefined? null: "-"} {((props.pagrindineInfo[1]).trecias[3]) === ""? "Pabaigos data": ((props.pagrindineInfo[1]).trecias[3])}</h6> 
                            <p>{((props.pagrindineInfo[1]).trecias[4]) === ""? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sit veniam ullam veritatis error suscipit dignissimos vitae sint quidem qui.": ((props.pagrindineInfo[1]).trecias[4])}</p>
                        </div>
                        <div className="darbas" id="darbas4">
                            <h5>{((props.pagrindineInfo[1]).ketvirtas[0]) === ""? "Pareigos": ((props.pagrindineInfo[1]).ketvirtas[0])}</h5> 
                            <h6>{((props.pagrindineInfo[1]).ketvirtas[1]) === ""? "Įmonė": ((props.pagrindineInfo[1]).ketvirtas[1])}{((props.pagrindineInfo[1]).ketvirtas[2]) === undefined? null: ","} {((props.pagrindineInfo[1]).ketvirtas[2]) === ""? "Pradžios data": ((props.pagrindineInfo[1]).ketvirtas[2])} {((props.pagrindineInfo[1]).ketvirtas[2]) === undefined? null: "-"} {((props.pagrindineInfo[1]).ketvirtas[3]) === ""? "Pabaigos data": ((props.pagrindineInfo[1]).ketvirtas[3])}</h6> 
                            <p>{((props.pagrindineInfo[1]).ketvirtas[4]) === ""? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sit veniam ullam veritatis error suscipit dignissimos vitae sint quidem qui.": ((props.pagrindineInfo[1]).ketvirtas[4])}</p>
                        </div>
                        <div className="darbas" id="darbas5">
                            <h5>{((props.pagrindineInfo[1]).penktas[0]) === ""? "Pareigos": ((props.pagrindineInfo[1]).penktas[0])}</h5> 
                            <h6>{((props.pagrindineInfo[1]).penktas[1]) === ""? "Įmonė": ((props.pagrindineInfo[1]).penktas[1])}{((props.pagrindineInfo[1]).penktas[2]) === undefined? null: ","} {((props.pagrindineInfo[1]).penktas[2]) === ""? "Pradžios data": ((props.pagrindineInfo[1]).penktas[2])} {((props.pagrindineInfo[1]).penktas[2]) === undefined? null: "-"} {((props.pagrindineInfo[1]).penktas[3]) === ""? "Pabaigos data": ((props.pagrindineInfo[1]).penktas[3])}</h6> 
                            <p>{((props.pagrindineInfo[1]).penktas[4]) === ""? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sit veniam ullam veritatis error suscipit dignissimos vitae sint quidem qui.": ((props.pagrindineInfo[1]).penktas[4])}</p>
                        </div>
                    </div>
                    <div className='antra-eile'>
                        <h4>Išsilavinimas ir papildomi kursai</h4>
                        <div className="issilavinimas-turinys">
                            <h5>{(issilavinimasPirmas[0]) === ""? "Programos pavadinimas": (issilavinimasPirmas[0])}</h5> 
                            <h6>{(issilavinimasPirmas[1]) === ""? "Mokymo įstaiga": (issilavinimasPirmas[1])}{issilavinimasPirmas[0] === undefined? null: ","} {(issilavinimasPirmas[2]) === ""? "Pradžios data": (issilavinimasPirmas[2])} {issilavinimasPirmas[0] === undefined? null: "-"} {(issilavinimasPirmas[3]) === ""? "Pabaigos data": (issilavinimasPirmas[3])}</h6>
                        </div>
                        <div className="issilavinimas-turinys ">
                            <h5>{(issilavinimasAntras[0]) === ""? "Programos pavadinimas": (issilavinimasAntras[0])}</h5> 
                            <h6>{(issilavinimasAntras[1]) === ""? "Mokymo įstaiga": (issilavinimasAntras[1])}{issilavinimasAntras[0] === undefined? null: ","} {(issilavinimasAntras[2]) === ""? "Pradžios data": (issilavinimasAntras[2])} {issilavinimasAntras[0] === undefined? null: "-"} {(issilavinimasAntras[3]) === ""? "Pabaigos data": (issilavinimasAntras[3])}</h6>
                        </div>
                        <div className="issilavinimas-turinys antrinis">
                            <h5>{(issilavinimasTrecias[0]) === ""? "Programos pavadinimas": (issilavinimasTrecias[0])}</h5> 
                            <h6>{(issilavinimasTrecias[1]) === ""? "Mokymo įstaiga": (issilavinimasTrecias[1])}{issilavinimasTrecias[0] === undefined? null: ","} {(issilavinimasTrecias[2]) === ""? "Pradžios data": (issilavinimasTrecias[2])} {issilavinimasTrecias[0] === undefined? null: "-"} {(issilavinimasTrecias[3]) === ""? "Pabaigos data": (issilavinimasTrecias[3])}</h6>
                        </div>
                        <div className="issilavinimas-turinys antrinis">
                            <h5>{(issilavinimasKetvirtas[0]) === ""? "Programos pavadinimas": (issilavinimasKetvirtas[0])}</h5> 
                            <h6>{(issilavinimasKetvirtas[1]) === ""? "Mokymo įstaiga": (issilavinimasKetvirtas[1])}{issilavinimasKetvirtas[0] === undefined? null: ","} {(issilavinimasKetvirtas[2]) === ""? "Pradžios data": (issilavinimasKetvirtas[2])} {issilavinimasKetvirtas[0] === undefined? null: "-"} {(issilavinimasKetvirtas[3]) === ""? "Pabaigos data": (issilavinimasKetvirtas[3])}</h6>
                        </div>
                        <div className="issilavinimas-turinys antrinis">
                            <h5>{(issilavinimasPenktas[0]) === ""? "Programos pavadinimas": (issilavinimasPenktas[0])}</h5> 
                            <h6>{(issilavinimasPenktas[1]) === ""? "Mokymo įstaiga": (issilavinimasPenktas[1])}{issilavinimasPenktas[0] === undefined? null: ","} {(issilavinimasPenktas[2]) === ""? "Pradžios data": (issilavinimasPenktas[2])} {issilavinimasPenktas[0] === undefined? null: "-"} {(issilavinimasPenktas[3]) === ""? "Pabaigos data": (issilavinimasPenktas[3])}</h6>
                        </div>
                        <div className="issilavinimas-turinys antrinis">
                            <h5>{(issilavinimasSestas[0]) === ""? "Programos pavadinimas": (issilavinimasSestas[0])}</h5> 
                            <h6>{(issilavinimasSestas[1]) === ""? "Mokymo įstaiga": (issilavinimasSestas[1])}{issilavinimasSestas[0] === undefined? null: ","} {(issilavinimasSestas[2]) === ""? "Pradžios data": (issilavinimasSestas[2])} {issilavinimasSestas[0] === undefined? null: "-"} {(issilavinimasSestas[3]) === ""? "Pabaigos data": (issilavinimasSestas[3])}</h6>
                        </div>
                        <div className='igudziai-cv'>
                            <h4>Įgūdžiai</h4>
                            <div className="skills-tekstas">
                                <p>
                                {(props.pagrindineInfo[3][0]) === ""? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit molestias, eveniet vitae blanditiis tempore. Nulla velit recusandae quia ab dolores. Quidem totam fugiat ducimus aspernatur natus quos excepturi molestias?": (props.pagrindineInfo[3][0])}
                                </p>
                            </div>
                        </div>
                        <div className='kalbos-cv'>
                            <h4>Kalbos</h4>
                            <div className='kalbos-cv-turinys'>
                                <div>
                                    <h3>
                                        {(props.pagrindineInfo[4].pirma[0]) === ""? "Kalba": (props.pagrindineInfo[4].pirma[0])}
                                        <p>{(props.pagrindineInfo[4].pirma[1]) === ""? "Elementary Proficiency": (props.pagrindineInfo[4].pirma[1])}</p> 
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        {(props.pagrindineInfo[4].antra[0]) === ""? "Kalba": (props.pagrindineInfo[4].antra[0])}
                                        <p>{(props.pagrindineInfo[4].antra[1]) === ""? "Elementary Proficiency": (props.pagrindineInfo[4].antra[1])}</p>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        {(props.pagrindineInfo[4].trecia[0]) === ""? "Kalba": (props.pagrindineInfo[4].trecia[0])}
                                        <p>{(props.pagrindineInfo[4].trecia[1]) === ""? "Elementary Proficiency": (props.pagrindineInfo[4].trecia[1])}</p>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        {(props.pagrindineInfo[4].ketvirta[0]) === ""? "Kalba": (props.pagrindineInfo[4].ketvirta[0])}
                                        <p>{(props.pagrindineInfo[4].ketvirta[1]) === ""? "Elementary Proficiency": (props.pagrindineInfo[4].ketvirta[1])}</p>
                                    </h3>
                                </div>
                                <div>
                                    <h3>
                                        {(props.pagrindineInfo[4].penkta[0]) === ""? "Kalba": (props.pagrindineInfo[4].penkta[0])}
                                        <p>{(props.pagrindineInfo[4].penkta[1]) === ""? "Elementary Proficiency": (props.pagrindineInfo[4].penkta[1])}</p>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Curriculum