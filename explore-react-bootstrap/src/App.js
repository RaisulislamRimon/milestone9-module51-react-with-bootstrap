import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from './components/Navbar/Navbar';
import Toast from './components/Toast/Toast';


function App() {
  return (
    <div className="App">
      <button>Simple Button</button>
      <Button>React Bootstrap Button</Button>
      <Button variant='danger'>React Bootstrap Button</Button>
      <Spinner animation="grow" variant="danger" />
      <Navbar />
      <Toast />
    </div>
  );
}

export default App;
