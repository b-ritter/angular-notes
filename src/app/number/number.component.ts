import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from "lodash";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  number_data
  base_url
  constructor(http: Http) { 
    this.base_url = 'https://en.wikipedia.org/wiki/';
    http.get('https://en.wikipedia.org/api/rest_v1/page/related/imaginary')
      .map(res => res.json())
      .subscribe(wiki_data => {
        const data = wiki_data.pages.slice(1,-1);
        const number_info = Object.entries(data).map(([key, value])=>{
          let { 
            'title': link,
            'thumbnail': {
              'source': source
            }={'source': null},
            'extract': description,
            'normalizedtitle': title 
          } = value;
  
          return {
            title: title,
            link: link,
            description: description,
            thumb: source
          }
        })
        this.number_data = number_info;
      })
  }

  ngOnInit() {
  }

  link(item) {
    return this.base_url + item.link;
  }

}