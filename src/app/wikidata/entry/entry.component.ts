import { Component, OnInit, Input } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;
  private description: string;
  private title: string;
  private source: string;
  private link: string;
  private link_base:string = "https://en.wikipedia.org/wiki/";
  constructor() {}

  ngOnInit() {
    this.description = this.entry.description;
    this.title = this.entry.title;
    this.source = this.entry.source;
    this.link = this.link_base + this.entry.link;
  }

}
