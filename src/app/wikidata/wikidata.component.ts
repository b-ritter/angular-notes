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
  card_control:string;
  cardContainerClasses = {};
  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit():void {
    this.card_control = "card-columns";
    //TODO(Ben): Let's use a few different search terms
    this.search('number')
      .subscribe((res)=> this.wikidata = res);
    this.helloWorld({});
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
    return this.base_url + item.link;
  }

  helloWorld(state:any = {}){
    //document card columns
   // const dcc = document.querySelector('.card-columns');
    // const cc = 'card-columns';

    //keeping switch case in case combination cases need to be 
    //supported in future renditions 
    // switch(state.option){
    //   case 'top-left':
    //     this.card_control = cc;
    //   break;
    //   case 'top-right':
    //     this.card_control = cc +  ' top-right';
    //   break;
    //   case 'bottom-left':
    //     this.card_control = cc +  ' bottom-left';
    //   break;
    //   case 'bottom-right':
    //     this.card_control = cc +  ' bottom-right';
    //   break;
    //   case 'norm-reverse':
    //     this.card_control = cc +  ' norm-reverse';
    //   break;
    //   case 'top-right-reverse':
    //     this.card_control = cc +  ' top-right-reverse';
    //   break;
    //   case 'drape':
    //     this.card_control = cc +  ' drape';
    //   break;
    //   case 'vertical-align':
    //     this.card_control = cc +  ' vertical-align';
    //   break;
    //   case 'vertical-align-even-space':
    //     this.card_control = cc +  ' vertical-align-even-space';
    //   break;
    // }
    this.cardContainerClasses = {
      'card-columns': true,
      'top-left': state.option === 'top-left'
    }
  }

}
