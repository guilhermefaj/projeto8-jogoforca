import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras"

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default function App() {

  const [habilitarLetras, setHabilitarLetras] = useState(false);
  const [palavra, setPalavra] = useState("");
  const [underline, setUnderline] = useState("");
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
  const [erros, setErros] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [vitoria, setVitoria] = useState(false);

  console.log("erros:", erros)
  console.log("palavra:", palavra)
  console.log("gameOver:", gameOver)
  console.log("vitoria:", vitoria)

  function escolherPalavra() {
    setLetrasEscolhidas([]);
    setErros(0);
    const palavra = palavras[Math.floor(Math.random() * palavras.length)]
    setPalavra(palavra);
    let novoUnderline = palavra.replaceAll(/./g, "_ ");
    setUnderline(novoUnderline);
    setHabilitarLetras(true);
  }

  function substituirLetra(letra) {
    if (palavra.includes(letra)) {
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
      if (novaUnderline.indexOf("_") === -1) {
        setVitoria(true);
      }
    } else {
      setErros(erros + 1);
      setLetrasEscolhidas([...letrasEscolhidas, letra]);
      if (erros + 1 === 6) {
        setGameOver(true);
        setHabilitarLetras(false);
        setUnderline(palavra);
      }
    }
  }

  function exibirLetras() {
    return alfabeto.map(letra => (
      <button
        key={letra}
        disabled={letrasEscolhidas.includes(letra)}
        onClick={() => substituirLetra(letra)}
      >
        {letra}
      </button>
    ))
  }


  return (
    <div className="App">
      <Jogo
        setUnderline={setUnderline}
        underline={underline}
        setPalavra={setPalavra}
        palavra={palavra}
        escolherPalavra={escolherPalavra}
        erros={erros}
        vitoria={vitoria}
        gameOver={gameOver}
      />
      <div className="LetrasContainer">
        <Letras
          habilitarLetras={habilitarLetras}
          substituirLetra={substituirLetra}
          exibirLetras={exibirLetras}
        />
      </div>

    </div>
  );
}