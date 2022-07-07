import './App.css';
import Chatbot from './Components/chatbot';
import {JsonForm} from './Components/jsonForm';


function App() {
  return (
    <div className="App">
      <Chatbot/>
      <JsonForm />
    </div>
  );
}

export default App;
