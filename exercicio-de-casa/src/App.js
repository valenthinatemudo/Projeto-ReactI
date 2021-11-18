import './App.css';
import Title from './components/Titulo/Title';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Title titulo = "Meu Primeiro Projeto React do Zero"/>
      <Title subtitulo = "Greys Anatomy ❤️"/>
      <Title paragrafo = "Personagens que eu amo" />
      <Card />
      <Title autora = "Feito por Valenthina Temudo | Exercício React {Reprograma}" />
      </header>
    </div>
  );
}

export default App