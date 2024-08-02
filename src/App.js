
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import CreateSaga from './component/CreateSaga';
import ReadSaga from './component/ReadSaga';
import UpDataSaga from './component/UpDataSaga';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import {UserProvider} from './component/UserContext'

function App() {
  return (
    <>
    {/* <UserProvider> */}
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<CreateSaga/>} />
      <Route path='/read' element={<ReadSaga/>}/>
      <Route path='/update' element={<UpDataSaga/>}/>

      
    </Routes>
    </BrowserRouter>
    {/* </UserProvider> */}
   
    </>
  );
}

export default App;
