import Paragraph from './components/styledText';
import ButtonAlert from './components/buttonAlert';
import logo from '../src/assets/logo/logo.svg';

function App() {
  return (
    <div className='App-header'>
      <h1>Quests Base React</h1>
      <img src={logo} className="App-logo" alt="logo" />
        <Paragraph />
        <ButtonAlert />
    </div>
  );
}

export default App;
