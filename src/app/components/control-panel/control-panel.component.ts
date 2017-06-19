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
    Array.prototype.slice.call(document.querySelectorAll('.btn-secondary'), 0).forEach((target)=>{
      target.className = target.className.replace('btn-secondary', '');
      target.className = target.className.concat(' btn-primary');
    });
  }

  toggle(evt){
    this.resetAllActive();
   // if(evt.target.className.includes('btn-primary')){
      evt.target.className = evt.target.className.replace('btn-primary', '');
      evt.target.className = evt.target.className.concat(' btn-secondary');
  }

  emitTest(test_option: string){
    this.change.emit({option:test_option});
  }

}
