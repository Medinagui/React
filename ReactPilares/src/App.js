// Styles / CSS
import './App.css';
import Ironia from './assets/ironia.jpg'
import ManageData from './components/ManageData';


function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
    {/*Imagem em public*/}
      <div>
        <img  src="/duo1.jpg" alt="Duolingo Bolado" className="containerimg"/>
      </div>
    {/*Imagem em assets*/}
      <div>
        <img src={Ironia} alt="Era ironia" className="containerimg"/>
      </div>
      <ManageData/> 
    </div>
  );
}

export default App;
