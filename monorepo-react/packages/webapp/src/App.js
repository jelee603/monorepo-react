import logo from './logo.svg';
import './App.css';
import {Button} from '@my-app/library';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button disabled={false}>Library Button</Button>
        <Button type="secondary">Secondary Button</Button>
      </header>
    </div>
  );
}

export default App;
