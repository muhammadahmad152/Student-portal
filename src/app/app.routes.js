import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Students } from './pages/students/students';
export const routes = [
    {
        path: '',
        component: Home,
        title: 'Home | Student Portal',
    },
    {
        path: 'about',
        component: About,
        title: 'About | Student Portal',
    },
    {
        path: 'students',
        component: Students,
        title: 'Students | Student Portal',
    },
    {
        path: '**',
        redirectTo: '',
    },
];
