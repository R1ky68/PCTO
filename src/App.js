import PaginaCasa from "./components/PaginaCasa";
import PaginaCinque from "./components/PaginaCinque";
import PaginaIniziale from "./components/PaginaIniziale";
import PaginaQuattro from "./components/PaginaQuattro";
import PaginaTre from "./components/PaginaTre";
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <PaginaIniziale />
      <PaginaCasa />
      <PaginaTre />
      <PaginaQuattro />
      <PaginaCinque />
      <Team />
    </div>
  );
}

export default App;