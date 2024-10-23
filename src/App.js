import Paragraph from './components/paragraph/paragraph';
import Button from './components/button/button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App-header'>
      <h1>Quests Base React</h1>
      <img src={logo} className="App-logo" alt="logo" />
        <Paragraph/>
        <Button />
    </div>
  );
}

export default App;
