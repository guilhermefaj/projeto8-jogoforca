import { useState } from "react";
import palavras from "./palavras"

export default function Jogo(props) {
    const [palavra, setPalavra] = useState("")
    const [underline, setUnderline] = useState("")

    let erros = 0;

    function escolherPalavra() {
        const palavra = palavras[Math.floor(Math.random() * palavras.length)]
        setPalavra(palavra);
        let novoUnderline = palavra.replaceAll(/./g, "_ ");
        setUnderline(novoUnderline);
        props.iniciarJogo();
    }

    return (
        <div className="Jogo">
            <img src="/projeto__forca__imagens/assets/forca0.png" />
            <div>
                <button
                    className="escolherPalavra"
                    onClick={escolherPalavra}
                >
                    Escolher Palavra
                </button>
                <span>{underline}</span>
            </div>
        </div>
    )
}