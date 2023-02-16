import { useState } from "react";

export default function BotaoLetra(props) {

    const [selecionada, setSelecionada] = useState(false);

    function letraSelecionada() {
        setSelecionada(true);
    }

    return (
        <button
            onClick={letraSelecionada}
            disabled={props.letrasHabilitadas ? selecionada : true}
        >
            {props.letra}
        </button>
    )
}