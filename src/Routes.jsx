import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from './Components/BasePage';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function RoutesApp() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Home />} />
            <Route path="contato" element={<Contact />}/>
          </Route>
        </Routes>

      </BrowserRouter>
   
    </>
  );
}

export default RoutesApp
