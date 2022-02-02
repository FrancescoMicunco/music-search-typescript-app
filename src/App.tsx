import './App.css';
import{ BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
  
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
      </header>
    </div>
    <Routes>
      <Route path="/" element="<HomePage />"/>
      <Route path="/detail" element="<DetailsPage />"/>
      <Route path="*" element="Page Not found!"/>
    </Routes>
    
    </BrowserRouter>

    
  );
}

export default App;
