import { HeaderOnly } from '~/components/Layout';
import Home from '~/page/Home';
import Fllowing from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Fllowing },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    //... more routes
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
