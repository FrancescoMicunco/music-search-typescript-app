import './App.css';
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './Components/HomePage';
import { Details } from './Components/DetailsPage';


function App() {
  return (
  
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/track/:id" element={<Details />}/>
      <Route path="*" element="Page Not found!"/>
    </Routes>
      </header>
    </div>
    
    
    </BrowserRouter>

    
  );
}

export default App;
