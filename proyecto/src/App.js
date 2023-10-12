import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a nuestro sitio, en este momento se encuentra en desarrollo"}/>
    </div>
  );
}

export default App;
