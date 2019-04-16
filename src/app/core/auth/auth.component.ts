import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  public panelState: 'left-panel-active' | 'right-panel-active' = 'left-panel-active';

  constructor() { }

  public togglePanelState(): void {
    if (this.panelState === 'left-panel-active') {
      this.panelState = 'right-panel-active';
    } else {
      this.panelState = 'left-panel-active';
    }
  }
}
