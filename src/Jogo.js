import { useState } from "react";
import palavras from "./palavras"

export default function Jogo(props) {
    const [palavra, setPalavra] = useState("")

    function inserirPalavra() {
        props.iniciarJogo();
        const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)]
        setPalavra(novaPalavra);
        console.log(novaPalavra)
    }

    return (
        <div className="Jogo">
            <img src="/projeto__forca__imagens/assets/forca0.png" />
            <div>
                <button
                    className="escolherPalavra"
                    onClick={inserirPalavra}
                >
                    Escolher Palavra
                </button>
                <span>{palavra}</span>
            </div>
        </div>
    )
}
