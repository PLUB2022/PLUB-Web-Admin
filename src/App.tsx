import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import SideBar from './components/SideBar';
import { ROUTES } from './constants/routes';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
