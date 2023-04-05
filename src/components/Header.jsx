import React, { useRef} from 'react'
import "./Header.css"
import BendraInformacija from './BendraInformacija/BendraInformacija';
import DarboPatirtis from './DarboPatirtis/DarboPatirtis';
import Issilavinimas from './Issilavinimas/Issilavinimas';
import Igudziai from './Igudziai/Igudziai';
import Kalbos from './Kalbos/Kalbos';

const Header = (props) => {
  const bendraInformacijaScrollRef = useRef();
  const darboPatirtisScrollRef = useRef();
  const issilavinimasScrollRef = useRef();
  const igudziaiScrollRef = useRef();
  const kalbosScrollRef = useRef();

  const listBendraInformacijaScrollRef = useRef();
  const listDarboPatirtisScrollRef = useRef();
  const listIssilavinimasScrollRef = useRef();
  const listIgudziaiScrollRef = useRef();
  const listKalbosScrollRef = useRef();

  const bendraInformacijaScroll = () => {
    bendraInformacijaScrollRef.current.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "center"
    })
  }
  const darboPatirtisScroll = () => {
    darboPatirtisScrollRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: "nearest",
      block: "center"
    })
  }
  const issilavinimasScroll = () => {
    issilavinimasScrollRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: "nearest",
      block: "center"
    })
  }
  const igudziaiScroll = () => {
    igudziaiScrollRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: "nearest",
      block: "center"
    })
  }
  const kalbosScroll = () => {
    kalbosScrollRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: "nearest",
      block: "center"
    })
  }
  // function isElementInViewport(el) {
  //   var rect = el.getBoundingClientRect();
  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
  //     rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  //   );

let INFO_MASYVAS = [
  {vardas: "", pavarde: "", pozicija: "", tel: 0, aprasymas: "", pastas: "", link: ""}, //bendra-info
  {pirmas: "", antras: "", trecias: "", ketvirtas: "", penktas: "", sestas: "", septintas: "", astuntas: ""}, //darbo skiltis
  {pirmas: "", antras: "", trecias: "", ketvirtas: "", penktas: "", sestas: "", septintas: "", astuntas: ""}, //issilavinimo skiltis
  ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit molestias, eveniet vitae blanditiis tempore. Nulla velit recusandae quia ab dolores. Quidem totam fugiat ducimus aspernatur natus quos excepturi molestias?"], //igudziai
  {pirma: "", antra: "", trecia: "", ketvirta: "", penkta: ""}, //kalbos
]
let darboInformacijosMasyvas = [];
let issilavinimoInformacijosMasyvas = [];
let kalbosInformacijosMasyvas = [];
const darboSkiltis = () => {
  for (let i = 1; i < document.querySelectorAll(`.pozicija`).length+1; i++){
    let laikinasInformacijosMasyvas = [];
    laikinasInformacijosMasyvas.push(document.querySelectorAll(`.pozicija-darbe${i}`)[0].value, document.querySelectorAll(`.imone-dirbta${i}`)[0].value, document.querySelectorAll(`.pradzios-data${i}`)[0].value, document.querySelectorAll(`.pabaigos-data${i}`)[0].value, document.querySelectorAll(`.darbo-pobudis${i}`)[0].value);
    darboInformacijosMasyvas.push(laikinasInformacijosMasyvas);
  }
}
const issilavinimoSkiltis = () => {
  for (let i = 1; i < document.querySelectorAll(`.pavadinimas-input`).length+1; i++){
    let laikinasInformacijosMasyvas = [];
    laikinasInformacijosMasyvas.push(document.querySelectorAll(`.programos-pavadinimas${i}`)[0].value, document.querySelectorAll(`.mokymosi-istaiga${i}`)[0].value, document.querySelectorAll(`.pradzios-data-kursai${i}`)[0].value, document.querySelectorAll(`.pabaigos-data-kursai${i}`)[0].value);
    issilavinimoInformacijosMasyvas.push(laikinasInformacijosMasyvas);
  }
}
const igudziuSkiltis = () => {
  INFO_MASYVAS[3][0] = (document.querySelectorAll("#igudziai-ivestis")[0].value);
}
const kalbosSkiltis = () => {
  for (let i = 1; i < document.querySelectorAll(`.kalbos-cv`).length+1; i++){
    let laikinasInformacijosMasyvas = [];
    laikinasInformacijosMasyvas.push(document.querySelectorAll(`.kalba-ivestis${i}`)[0].value, document.querySelectorAll(`.lygio-parinktis${i}`)[0].value);
    kalbosInformacijosMasyvas.push(laikinasInformacijosMasyvas);
  }
}
const resetButton = () => {
  INFO_MASYVAS = [
    {vardas: "", pavarde: "", pozicija: "", tel: 0, aprasymas: "", pastas: "", link: ""}, //bendra-info
    {pirmas: "", antras: "", trecias: "", ketvirtas: "", penktas: "", sestas: "", septintas: "", astuntas: ""}, //darbo skilti
    {pirmas: "", antras: "", trecias: "", ketvirtas: "", penktas: "", sestas: "", septintas: "", astuntas: ""}, //issilavinimo skiltis
    ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit molestias, eveniet vitae blanditiis tempore. Nulla velit recusandae quia ab dolores. Quidem totam fugiat ducimus aspernatur natus quos excepturi molestias?"],
    {pirma: "", antra: "", trecia: "", ketvirta: "", penkta: ""},
  ]
  for(let i = 0; i < document.querySelectorAll("input").length; i++){
    document.querySelectorAll("input")[i].value = "";
  }
  for(let i = 0; i < document.querySelectorAll("textarea").length; i++){
    document.querySelectorAll("textarea")[i].value = "";
  }
}
const kitasPuslapis = () => {
  darboSkiltis();
  issilavinimoSkiltis();
  kalbosSkiltis();
  if (((document.querySelectorAll(".kalbos-cv").length === 1) && (document.querySelectorAll(".kalbos-cv")[0].value === "")) && ((document.querySelectorAll(".pozicija").length === 1) && (document.querySelectorAll(".pozicija")[0].value === ""))&&((document.querySelectorAll(".pavadinimas-input").length === 1) && (document.querySelectorAll(".pavadinimas-input")[0].value === ""))){
    for(let i = 0; i < 5; i++){
      // console.log(INFO_MASYVAS[i]);
      for (let item in INFO_MASYVAS[i]){
        if ((INFO_MASYVAS[i])[item] === "id"){
          (INFO_MASYVAS[i])[item] = [""];
        }
        else{
          (INFO_MASYVAS[i])[item] = ["","","","","",""];

        }
        
    }
  }
  }
  igudziuSkiltis();
  console.log(INFO_MASYVAS[3][0]);
  let kiekis = 0;
  for (let daiktas in INFO_MASYVAS[0]){  
    (INFO_MASYVAS[0])[daiktas] = document.querySelectorAll(`.bendr-inf`)[kiekis].value;
    kiekis++;
  }
  let darbas = 0;
  for (let item in INFO_MASYVAS[1]){
    if (darboInformacijosMasyvas[darbas] === undefined){
      break;
    }
    else {
      (INFO_MASYVAS[1])[item] = darboInformacijosMasyvas[darbas];
      darbas++;
    }
  }
  let issilavinimas = 0;
  for (let item in INFO_MASYVAS[2]){
    if (issilavinimoInformacijosMasyvas[issilavinimas] === undefined){
      break;
    }
    else {
      (INFO_MASYVAS[2])[item] = issilavinimoInformacijosMasyvas[issilavinimas];
      issilavinimas++;
    }
  }
  if (skaiciuoklesKiekis === 0){
    console.log("____------____")
    INFO_MASYVAS[1].pirmas[3] = "Dabar";
    console.log(INFO_MASYVAS[1].pirmas[3]);
  }
  let kalbos = 0;
  for (let item in INFO_MASYVAS[4]){
    if (kalbosInformacijosMasyvas[kalbos] === undefined){
      break;
    }
    else {
      (INFO_MASYVAS[4])[item] = kalbosInformacijosMasyvas[kalbos];
      kalbos++;
    }
  }
  props.masyvasHeader(INFO_MASYVAS);
  props.clickas();
}
let skaiciuoklesKiekis = 1;
const skaiciuokle = (info) => {
  console.log(info);
  if (info === true){
    skaiciuoklesKiekis++;
    console.log(skaiciuoklesKiekis, "kiekis++")
  }
  else {
    skaiciuoklesKiekis--;
    console.log(skaiciuoklesKiekis, "kiekis--")
  }
}
const toggleHeader = () => {
  if(document.getElementById("header").style.display !== "block"){
    document.getElementById("header").style.display = "block";
    setTimeout(function(){
      document.getElementById("header").removeAttribute("style");
    }, 3500)
  }
}
const logo = require('./logo513.png');
  return (
    <div className='Appsas'>
    <div id="header" className='headeris navbar-expand-lg'>
        <div className='headeris-virsus'></div>
        <div>
        <img className="headeris-nuotrauka"src={logo} alt="" />
        <h1>CV GENERATOR</h1>
        <div className='headeris-content'>
            <ul>
                <li ref={listBendraInformacijaScrollRef} id="bendra-informacija" onClick= {bendraInformacijaScroll}>Bendra informacija</li>
                <li ref={listDarboPatirtisScrollRef} 
               id="darbo-patirtis" className="" onClick={darboPatirtisScroll}>Darbo Patirtis</li>
                <li ref={listIssilavinimasScrollRef} onClick={issilavinimasScroll}>Išsilavinimas/Kursai</li>
                <li ref={listIgudziaiScrollRef} onClick={igudziaiScroll}>Įgūdžiai/Savybės</li>
                <li ref={listKalbosScrollRef} onClick={kalbosScroll}>Kalbos</li>
            </ul>
        </div>
        <div className='headeris-mygtukai'>
            <button onClick={resetButton}>Reset</button>
            <button onClick={kitasPuslapis}>Rodyti CV</button>
        </div>
        </div>
    </div>
    <div className='content'>
      <div ref={bendraInformacijaScrollRef}>
        <BendraInformacija  paspaudimas={toggleHeader}/>
      </div>
      <div ref={darboPatirtisScrollRef}>
        <DarboPatirtis zymejimas={skaiciuokle}/>
      </div>
      <div ref={issilavinimasScrollRef}>
        <Issilavinimas />
      </div>
      <div ref={igudziaiScrollRef}>
        <Igudziai />
      </div>
      <div ref={kalbosScrollRef}>
        <Kalbos />
      </div>
    </div>
    </div>
  )
}

export default Header