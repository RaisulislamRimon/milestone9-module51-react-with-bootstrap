import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <button>Simple Button</button>
      <Button>React Bootstrap Button</Button>
      <Button variant='danger'>React Bootstrap Button</Button>
      <Spinner animation="grow" variant="danger" />

    </div>
  );
}

export default App;
