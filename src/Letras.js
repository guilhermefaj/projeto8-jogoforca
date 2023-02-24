import BotaoLetra from "./BotaoLetra";

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default function Letras(props) {

    return (
        <>
            <div className="Letras">
                {alfabeto.map((letra) => (
                    <BotaoLetra
                        key={letra}
                        onClick={() => props.substituirLetra(letra)}
                        letra={letra}
                        habilitarLetras={props.habilitarLetras}
                        foiEscolhida={props.letrasEscolhidas.includes(letra)}
                    />
                ))}
            </div>
        </>
    )
}