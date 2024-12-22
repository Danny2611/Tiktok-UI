import config from '~/config';

import { HeaderOnly } from '~/layouts';
import Home from '~/page/Home';
import Fllowing from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.fllowing, component: Fllowing },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    //... more routes
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
