import PaginaCasa from "./components/PaginaCasa";
import FunzioniDivertenti from "./components/FunzioniDivertenti";
import PaginaIniziale from "./components/PaginaIniziale";
import DescrizioneArduino from "./components/DescrizioneArduino";
import PaginaTre from "./components/PaginaTre";
import Team from './components/Team';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <PaginaIniziale />
      <PaginaCasa />
      <PaginaTre />
      <DescrizioneArduino />
      <FunzioniDivertenti />
      <Team />
      <Footer />
    </div>
  );
}

export default App;