import { Routes } from '@angular/router';


const routes: Routes = [
    {
        path:'login',
        loadComponent:() => import('./common/components/login-page/login-page.component')
    },
    {
        path:'',
        loadComponent: () => import('./common/components/menu/menu.component'),
        children:[
            {
                path: '',
                loadChildren: () => import('./common/components/menu.routes')
            },
            {
                path: '',
                redirectTo: 'employee', // Default child route
                pathMatch: 'full'
              }
        ]
    }
];

export default routes;