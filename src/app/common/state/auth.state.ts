import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, tap } from "rxjs";

export type Role = 'user' | 'admin';

@Injectable({
  providedIn: 'root'
})
export class AuthState {
    private userRoles = new BehaviorSubject<Role[]>(this.getStoredUserRoles() || []);
    private user = new BehaviorSubject< null>(null);
    private activeUserRoles = new BehaviorSubject<Role[]>(this.getStoredActiveUserRoles() || []);
    user$ = this.user.asObservable().pipe(map((user) => user ));

    userRoles$ = this.userRoles.asObservable();
    activeUserRoles$ = this.activeUserRoles
      .asObservable()
      .pipe(tap((roles) => localStorage.setItem('activeUserRoles', JSON.stringify(roles))));
  
      constructor(
        private _httpClient: HttpClient

      ){}
    loadRoles(){
      
     }

    getUserRoles(){
        return this.userRoles.getValue();

        
    }

    getStoredActiveUserRoles(): Role[] {
      if (typeof window !== 'undefined' && localStorage) {
        return JSON.parse(localStorage.getItem('userRoles') || '[]');
      }
      return []; // Return a default value for the server
    }
    
    

      getStoredUserRoles(): Role[] {
        if (typeof localStorage !== 'undefined') {
          return JSON.parse(localStorage.getItem('userRoles') || '[]');
        }
        return []; // Return an empty array if localStorage is not available
      }
      
    

      isAdmin() {
        return this.hasActiveRole('admin');
      }
    
      isUser() {
        return this.hasActiveRole('user');
      }
    
      hasActiveRole(role: Role) {
        return this.activeUserRoles.getValue().includes(role);
      }
    
      hasRole(role: Role) {
        return this.userRoles.getValue().includes(role);
      }

    private updateRoles(roles: Role[]) {
        this.userRoles.next(roles);
        this.activeUserRoles.next(roles);
        localStorage.setItem('userRoles', JSON.stringify(roles));
      }

      logout() {
        this.userRoles.next([]);
        this.activeUserRoles.next([]);
        
      }
    
      getActiveUserRoles() {
        return this.activeUserRoles.getValue();
      }
}
