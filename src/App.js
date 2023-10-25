
 
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

  import Login from './Login';

function App() {
  return (
    <div className="App">
      {/* <ToastContainer></ToastContainer> */}
      <BrowserRouter>
      <Routes>
      {/* <Route path='/' element={<OffCanvasExample/>}></Route> */}
         <Route path='/' element={<Login/>}></Route>
        {/* <Route path='/register' element={<Register/>}></Route> */} 
        {/* <Route path='/customer' element={<Customer/>}></Route> */}
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
