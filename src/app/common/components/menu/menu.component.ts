import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthState } from '../../state/auth.state';
import { MenuLayoutState } from '../menu-layout/menu-layout.state';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export default class MenuComponent {

  constructor(
    public _sidenavState: MenuLayoutState,
    public _authState: AuthState
  ){}
  //user$ = this._authState.user$;

}
