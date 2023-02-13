import styles from "./Cardapio.module.scss";
import logo from "../../assets/logo.svg";
// também posso subir a logo assim:
// import {ReactComponent as Logo} from "../../assets/logo.svg"
// Se fizer dessa forma, ali embaixo teria que chamar assim:
// apago toda a tag do img, e, no lugar, coloco como se fosse um componente, como setei ali em cima: <Logo />
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from "./Itens";

export default function Cardapio() {
  // O cardápio propriamente dito que meu site irá buscar deve estar um estado acima do meu return, para que ele possa ser reaproveitado ali dentro:
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null); // coloquei o estado inicial do filtro como nulo para ele já não me trazer algo na opçao antes de eu ver quais opcoes tenho e daí setar eu mesma.
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        {/* a imagem aqui embaixo aparecerá quebrada quando usar o código abaixo. Isso acontece porque o build não consegue reconhecer que esse caminho SRC é um arquivo estático. */}
        <img src={logo} alt="Aluroni logo" />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A cozy place to code & eat!</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Menu</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
