import { inject } from "@angular/core";
import { MenuLayoutState } from "./menu-layout/menu-layout.state";
import { Routes } from "@angular/router";



const showSidenav = () => {
   inject(MenuLayoutState).showNavigation();
 };
 

 const routes:Routes=[
    {
        path:'employee',
        loadChildren:()=>import('../../employee/employee.routes')
    },
    {
        path:'products',
        loadComponent:()=>import('../../product/products/products.component').then((m)=>m.ProductsComponent)
    },
    {
        path:'vendors',
        loadComponent:()=>import('../../vendor/vendors/vendors.component').then((m)=>m.VendorsComponent)
    },
    {
        path:'orders',
        loadComponent:()=>import('../../order/orders/orders.component').then((m)=>m.OrdersComponent)
    }
 ];

 export default routes;