import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Logined from './layout/Logined';
import NotLogined from './layout/NotLogined';
import AdminInfo from './pages/AdminInfo';
import Dashboard from './pages/Dashboard';
import Notice from './pages/Notice';
import SignIn from './pages/SignIn';
import User from './pages/User';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotLogined />}>
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        </Route>
        <Route element={<Logined />}>
          <Route path={ROUTES.MANAGE.ACCOUNT.ROOT} element={<AdminInfo />} />
          <Route path={ROUTES.MANAGE.DASHBOARD.ROOT} element={<Dashboard />} />
          <Route path={ROUTES.MANAGE.USER.LIST} element={<User />} />
          <Route path={ROUTES.MANAGE.USER.EXIT} element={<User />} />
          <Route path={ROUTES.MANAGE.USER.BAN} element={<User />} />
          <Route path={ROUTES.MANAGE.GROUP.LIST} element={<User />} />
          <Route path={ROUTES.MANAGE.GROUP.POST} element={<User />} />
          <Route path={ROUTES.MANAGE.GROUP.RECRUIT} element={<User />} />
          <Route path={ROUTES.MANAGE.MARKETING.BANNER} element={<User />} />
          <Route path={ROUTES.MANAGE.MARKETING.EVENT} element={<User />} />
          <Route path={ROUTES.MANAGE.STATISTICS.USER} element={<User />} />
          <Route path={ROUTES.MANAGE.STATISTICS.GROUP} element={<User />} />
          <Route path={ROUTES.MANAGE.SERVICE.INQUIRY} element={<User />} />
          <Route path={ROUTES.MANAGE.SERVICE.NOTICE} element={<Notice />} />
          <Route path={ROUTES.MANAGE.SERVICE.EVALUATION} element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
