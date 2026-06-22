import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import FetchData from './Components/FetchData/FetchData';
import AddData from './Components/AddData/AddData';



function App(){
  return(
   <>
 
   <BrowserRouter>
   <Routes>    
    <Route path="/" element={<Home/>}/>
     <Route path="/fetchData" element={<FetchData/>}/>
      <Route path="/addData" element={<AddData/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}
export default App