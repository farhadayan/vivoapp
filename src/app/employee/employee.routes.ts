import { inject } from "@angular/core";
import { Routes } from "@angular/router";
import { MenuLayoutState } from "../common/components/menu-layout/menu-layout.state";

 
const routes:Routes = [
    {
       path:'',
       //canActivate: [showSidenav],
       loadComponent:() => import('./employee-info/employee-info.component')
    },
    {
       path:'details',
       //canActivate: [showSidenav],
       loadComponent: () => import('./employee-details/employee-details.component')
    }
];

export default routes;