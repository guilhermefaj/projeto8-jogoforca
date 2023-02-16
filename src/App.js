import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras"

export default function App() {

  const [iniciou, setIniciou] = useState(false);
  const [palavra, setPalavra] = useState("");
  const [underline, setUnderline] = useState("");
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
  const [erros, setErros] = useState(0);

  function escolherPalavra() {
    const palavra = palavras[Math.floor(Math.random() * palavras.length)]
    setPalavra(palavra);
    let novoUnderline = palavra.replaceAll(/./g, "_ ");
    setUnderline(novoUnderline);
    setIniciou(true);
  }

  function substituirLetra(letra) {
    let novaUnderline = "";
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
        novaUnderline += letra + " ";
      } else {
        novaUnderline += underline[2 * i] + " ";
      }
    }
    setUnderline(novaUnderline);
    setLetrasEscolhidas([...letrasEscolhidas, letra]);
  }


  return (
    <div className="App">
      <Jogo
        setUnderline={setUnderline}
        underline={underline}
        setPalavra={setPalavra}
        palavra={palavra}
        escolherPalavra={escolherPalavra}
      />
      <div className="LetrasContainer">
        <Letras habilitarLetras={iniciou} />
      </div>

    </div>
  );
}