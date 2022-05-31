import './App.css';
import Main from './components/Main';
import AsideOne from './components/AsideOne';
import AsideTwo from './components/AsideTwo';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Main />
        <AsideOne />
        <AsideTwo />
      </div>
    </div>
  );
}

export default App;
