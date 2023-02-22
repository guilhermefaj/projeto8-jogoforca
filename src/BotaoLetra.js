import { useState } from "react";

export default function BotaoLetra(props) {

    const [selecionada, setSelecionada] = useState(false);

    function letraSelecionada() {
        setSelecionada(true);
        props.onClick();
    }

    return (
        <button
            onClick={letraSelecionada}
            disabled={props.habilitarLetras ? selecionada : true}
        >
            {props.letra}
        </button>
    )
}
