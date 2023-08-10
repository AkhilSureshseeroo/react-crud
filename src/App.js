import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { Create } from './Create';
import { Read } from './Read';
import { Update } from './Update';

function App() {
  return (
    
      
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>

        <Routes>
        <Route exact path='/create' element={<Create/>} />
        <Route exact path='/read' element={<Read/>} />
        <Route exact path='/update' element={<Update/>} />

        </Routes>
        
          
        
      </div>

     
      
    
   
    
  );
}

export default App;
