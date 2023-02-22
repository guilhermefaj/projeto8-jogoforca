import { useState } from "react";

export default function Jogo(props) {

    return (
        <div className="Jogo">
            <img src={`/projeto__forca__imagens/assets/forca${props.erros}.png`} />
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