import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Landing from '../pages/Langind';
import Logina from '../pages/Logina';
import RegisterA from '../pages/RegisterA';
import EDC from '../pages/EDC';


function App() {
    return ( 
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/logina" element={<Logina/>} />
                    <Route path="/registera" element={<RegisterA/>} />
                    <Route path="/edc" element={<EDC/>} />
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
        </BrowserRouter>   
     );
}

export default App;