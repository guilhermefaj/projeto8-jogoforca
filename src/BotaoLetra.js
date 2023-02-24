export default function BotaoLetra(props) {

    function letraSelecionada() {
        props.onClick();
    }

    return (
        <button
            data-test="letter"
            onClick={letraSelecionada}
            disabled={props.habilitarLetras ? props.foiEscolhida : true}
        >
            {props.letra}
        </button>
    )
}