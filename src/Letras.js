import BotaoLetra from "./BotaoLetra";

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default function Letras(props) {

    return (
        <>
            <div className="Letras">
                {alfabeto.map((item) => (
                    <BotaoLetra
                        key={item}
                        letra={item}
                        letrasHabilitadas={props.habilitarLetras}
                    />
                ))}
            </div>
        </>
    )
}