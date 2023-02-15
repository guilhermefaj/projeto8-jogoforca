import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {

  const [iniciou, setIniciou] = useState(false);

  function jogoIniciado() {
    setIniciou(true);
  }

  return (
    <div className="App">
      <Jogo iniciarJogo={jogoIniciado} />
      <div className="LetrasContainer">
        <Letras habilitarLetras={iniciou} />
      </div>

    </div>
  );
}