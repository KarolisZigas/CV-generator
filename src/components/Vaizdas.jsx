import React, {useState} from 'react'
import Curriculum from './Curriculum/Curriculum'
import Header from './Header'

const Vaizdas = (props) => {
    const [vaizdas, setVaizdas] = useState("header");
    const [data, setData] = useState("");
    const rodytiKita = () => {
        if (vaizdas === "header"){
            setVaizdas("curriculum");
        }
        else {
            setVaizdas("header");
        }
      }
    const rodyti = (perduotaInformacija) => {
        setData(perduotaInformacija);
    }
  return (
    <div>
        {vaizdas === "header"? <Header clickas={rodytiKita} masyvasHeader={rodyti}/> : null}
        {vaizdas === "curriculum"? <Curriculum clickas={rodytiKita} pagrindineInfo={data} /> : null}
    </div>
  )
}

export default Vaizdas