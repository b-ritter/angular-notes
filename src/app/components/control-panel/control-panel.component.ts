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
  
  toggle(evt){
   // if(evt.target.className.includes('btn-primary')){
      evt.target.className = evt.target.className.replace('btn-primary', '');
      evt.target.className = evt.target.className.concat(' btn-secondary');
       setTimeout(()=>{
          evt.target.className = evt.target.className.replace('btn-secondary', '');
          evt.target.className = evt.target.className.concat(' btn-primary');
       }, 3000);
  }

  emitTest(test_option: string){
    this.change.emit({option:test_option});
    setTimeout(()=>{this.change.emit({option: "reset"})}, 3000);
  }

}
