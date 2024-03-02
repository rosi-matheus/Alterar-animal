import "./App.css";
import { useState } from "react";
import Topo from "./componentes/Topo";
import CardAnimal from "./componentes/CardAnimal";
import CardInformacao from "./componentes/CardInformacao";

export default function App () {
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    tipoDoComponenteCard === "cachorro" ? setTipoDoComponenteCard("gato") : setTipoDoComponenteCard("cachorro");
  };


  return (
    <div className="App">
      <Topo clickAlterarAnimal={alterarState}/>

      <CardAnimal tipoAnimal = {tipoDoComponenteCard}/> 

      <CardInformacao tipoAnimal = {tipoDoComponenteCard} />
    </div>
  );
}

/* 
* <CardAnimal tipoAnimal = {tipoDoComponenteCard}/> //Enviando state para os componentes via props
* Ao fazer isso, as variáveis e a estrutura condicional pode ser retirada, e usadas diretamente nos componentes.

*/