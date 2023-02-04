import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Logined from './layout/Logined';
import NotLogined from './layout/NotLogined';
import AdminInfo from './pages/AdminInfo';
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
          <Route path={ROUTES.MANAGE.ACCOUNT.ROOT} element={<AdminInfo />} />
          <Route path={ROUTES.MANAGE.DASHBOARD.ROOT} element={<Members />} />
          <Route path={ROUTES.MANAGE.USER.LIST} element={<Members />} />
          <Route path={ROUTES.MANAGE.USER.EXIT} element={<Members />} />
          <Route path={ROUTES.MANAGE.USER.BAN} element={<Members />} />
          <Route path={ROUTES.MANAGE.GROUP.LIST} element={<Members />} />
          <Route path={ROUTES.MANAGE.GROUP.POST} element={<Members />} />
          <Route path={ROUTES.MANAGE.GROUP.RECRUIT} element={<Members />} />
          <Route path={ROUTES.MANAGE.MARKETING.BANNER} element={<Members />} />
          <Route path={ROUTES.MANAGE.MARKETING.EVENT} element={<Members />} />
          <Route path={ROUTES.MANAGE.STATISTICS.USER} element={<Members />} />
          <Route path={ROUTES.MANAGE.STATISTICS.GROUP} element={<Members />} />
          <Route path={ROUTES.MANAGE.SERVICE.INQUIRY} element={<Members />} />
          <Route path={ROUTES.MANAGE.SERVICE.NOTICE} element={<Members />} />
          <Route
            path={ROUTES.MANAGE.SERVICE.EVALUATION}
            element={<Members />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
