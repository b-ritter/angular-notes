import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  @Output() change = new EventEmitter();
  @Output() switchTheme = new EventEmitter();
  // thad: below is an example of strongly typing an eventemitter's 
  // expected output
  // change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  resetAllActive(node){
    // TODO(Ben): Make sure we reset nav links each submenu only 
    Array.prototype.slice.call(node.querySelectorAll('.nav-link'), 0).forEach((target)=>{
      target.className = 'nav-link';
    });
  }

  toggle(evt){
    this.resetAllActive(evt.target.parentNode.parentNode);
    evt.target.className = 'nav-link active';
  }

  emitTest(test_option: string){
    this.change.emit({option:test_option});
  }

  emitThemeSwitch(theme_option: string){
    this.switchTheme.emit({option:theme_option});
  }
}
