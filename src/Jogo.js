export default function Jogo(props) {

    function definirClasse() {
        props.escolherPalavra();
        const palavraSpan = document.querySelector('[data-test="word"]');
        palavraSpan.classList.remove("perdeu", "ganhou");
    }

    return (
        <div className="Jogo">
            <img data-test="game-image" src={`/projeto__forca__imagens/assets/forca${props.erros}.png`} />
            <div>
                <button
                    data-test="choose-word"
                    className="escolherPalavra"
                    onClick={definirClasse}
                >
                    Escolher Palavra
                </button>
                <span
                    data-test="word"
                    className={`${props.gameOver ? "perdeu" : ""
                        } ${props.vitoria ? "ganhou" : ""
                        }`}
                >{props.underline}</span>
            </div>
        </div>
    )
}