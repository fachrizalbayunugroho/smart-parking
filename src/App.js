import { Route, Routes } from 'react-router-dom';
import './styles.css';
import Main from './Main';
import Dashboard from './Dashboard';

function App() {
   return (
     <div className="App">
        <Routes>
         <Route path='/' element={<Main/>} />
         <Route path='/menu' element={<Dashboard/>} />
       </Routes>
     </div>
   );
 }

 export default App;