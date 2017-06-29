import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'app';
  themeClasses = {};
  switchTheme(state:any = {}){
    this.themeClasses = {
      'neutral': state.option === 'neutral',
      'warm': state.option === 'warm'
    }
  }
}
