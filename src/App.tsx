import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Logined from './layout/Logined';
import NotLogined from './layout/NotLogined';
import AdminInfo from './pages/AdminInfo';
import Dashboard from './pages/Dashboard';
import Policies from './pages/Policies';
import Service from './pages/Service';
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
          <Route path={ROUTES.MANAGE.SERVICE.INQUIRY} element={<Service />} />
          <Route path={ROUTES.MANAGE.SERVICE.NOTICE} element={<Service />} />
          <Route
            path={ROUTES.MANAGE.SERVICE.EVALUATION}
            element={<Service />}
          />
        </Route>
        <Route path={ROUTES.POLICIES.TERMS} element={<Policies />} />
        <Route path={ROUTES.POLICIES.PERSONAL} element={<Policies />} />
        <Route path={ROUTES.POLICIES.LOCATION} element={<Policies />} />
        <Route path={ROUTES.POLICIES.AGE} element={<Policies />} />
        <Route path={ROUTES.POLICIES.MARKETING} element={<Policies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
