import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from '../../state/auth.state';


@Component({
  selector: 'app-redirect',
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss'
})
export default class RedirectComponent {
  constructor(
    private _router:Router, private _authState: AuthState
  ){
    if(_authState.getUserRoles().length){
      this.redirectToDefaultRoute();
    }else{

    }
  }
    private redirectToDefaultRoute(){
      this._router.navigateByUrl('/login')
    }
  
}
