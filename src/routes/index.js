import routesConfig from '~/config/routes';

import { HeaderOnly } from '~/components/Layout';
import Home from '~/page/Home';
import Fllowing from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.fllowing, component: Fllowing },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    //... more routes
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
