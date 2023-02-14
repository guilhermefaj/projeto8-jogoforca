import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
  return (
    <div className="App">
      <Jogo />
      <div className="LetrasContainer">
        <Letras />
      </div>

    </div>
  );
}