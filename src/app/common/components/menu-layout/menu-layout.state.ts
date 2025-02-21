import { BehaviorSubject } from "rxjs";
import { AuthState } from "../../state/auth.state";
import { MENU_LAYOUT_Config } from "./menu-layout.config";
import { MenuLayoutConfig, TSidenavState } from "../../model/menu-model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
}
)

export class MenuLayoutState{
    constructor(private _authState: AuthState) {}

    
  private sidenavConfig = new BehaviorSubject<MenuLayoutConfig[]>(MENU_LAYOUT_Config);
//  private sidenavConfigClient = new BehaviorSubject<SidenavConfig[]>(SIDENAV_CONFIG_CLIENT);

  private state = new BehaviorSubject<TSidenavState>('opened');
  private hasNavigation = new BehaviorSubject<boolean>(false);

  state$ = this.state.asObservable();
  sidenavConfig$ = this.sidenavConfig.asObservable();
  //sidenavConfigClient$ = this.sidenavConfigClient.asObservable();
  hasNavigation$ = this.hasNavigation.asObservable();

  showNavigation() {
    this.hasNavigation.next(true);
  }
}