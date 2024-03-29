import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from './Components/BasePage';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

function RoutesApp() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Home />} />
            <Route path="contato" element={<Contact />}/>
            <Route path="servicos" element={<Services />} />
          </Route>
        </Routes>

      </BrowserRouter>
   
    </>
  );
}

export default RoutesApp
