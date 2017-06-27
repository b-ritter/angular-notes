import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  @Output()
  change = new EventEmitter();
  // thad: below is an example of strongly typing an eventemitter's 
  // expected output
  // change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  resetAllActive(){
    // TODO(Ben): Make sure we reset nav links each submenu only 
    Array.prototype.slice.call(document.querySelectorAll('.nav-link'), 0).forEach((target)=>{
      console.log(target);
      target.className = 'nav-link';
    });
  }

  toggle(evt){
    this.resetAllActive();
    evt.target.className = 'nav-link active';
  }

  emitTest(test_option: string){
    this.change.emit({option:test_option});
  }

}
