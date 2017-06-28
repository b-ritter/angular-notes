import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-number',
  templateUrl: './wikidata.component.html',
  styleUrls: ['./wikidata.component.scss']
})
export class WikidataComponent implements OnInit {
  http;
  wikidata;
  base_url:string = "https://en.wikipedia.org/api/rest_v1/page/related/";
  link_base:string = "https://en.wikipedia.org/wiki/";
  card_control:string;
  cardContainerClasses = {};
  themeClasses = {};
  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit():void {
    this.card_control = "card-columns";
    //TODO(Ben): Let's use a few different search terms
    this.search('number')
      .subscribe((res)=> this.wikidata = res);
    this.changeCardStyle({});
  }

  search(term: string): Observable<object[]>{
    return this.http
        .get(this.base_url + term)
        .map(res => {
          const wiki_data = res.json();
          return Object.entries(wiki_data.pages).map(
            ([key, value])=>{
              let { 
                'title': link,
                'thumbnail': {
                  'source': source
                }={'source': null},
                'extract': description,
                'normalizedtitle': title 
              } = value;

              return {
                title,
                link,
                description,
                source
              }
          })
          .filter(entry => {
            if (!entry.description.includes("may refer to")) {
              return entry;
            }
          });
        });
  }

  link(item) {
    return this.link_base + item.link;
  }

  changeCardStyle(state:any = {}){
    this.cardContainerClasses = {
      'card-columns': true,
      'top-left': state.option === 'top-left',
      'top-right': state.option === 'top-right',
      'vertical-align': state.option === 'vertical-align',
      'vertical-align-even-space': state.option === 'vertical-align-even-space',
      'drape': state.option === 'drape',
      'norm-reverse': state.option === 'norm-reverse',
      'top-right-reverse': state.option === 'top-right-reverse',
      'bottom-left': state.option === 'bottom-left',
      'bottom-right': state.option === 'bottom-right'
    }
  }

  switchTheme(state:any = {}){
    this.themeClasses = {
      'neutral': state.option === 'neutral'
    }
  }
}
