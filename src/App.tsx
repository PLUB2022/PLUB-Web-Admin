import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Logined from './layout/Logined';
import NotLogined from './layout/NotLogined';
import Members from './pages/Members';
import SignIn from './pages/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotLogined />}>
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        </Route>
        <Route element={<Logined />}>
          <Route path={ROUTES.MEMBERS} element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
