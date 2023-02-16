import { useState } from "react";

export default function Jogo(props) {

    const [erros, setErros] = useState(0);

    return (
        <div className="Jogo">
            <img src="/projeto__forca__imagens/assets/forca0.png" />
            <div>
                <button
                    className="escolherPalavra"
                    onClick={props.escolherPalavra}
                >
                    Escolher Palavra
                </button>
                <span>{props.underline}</span>
            </div>
        </div>
    )
}