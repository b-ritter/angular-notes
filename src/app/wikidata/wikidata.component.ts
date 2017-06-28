import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-number',
  templateUrl: './wikidata.component.html',
  styleUrls: ['./wikidata.component.scss']
})
export class WikidataComponent implements OnInit {

  wikidata
  base_url;
  card_control:string;
  constructor(http: Http) {
    this.card_control = "card-columns";
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
        this.wikidata = number_info;
      })
  }

  ngOnInit() {
  }

  link(item) {
    return this.base_url + item.link;
  }

  helloWorld(state:any = {}){
    //document card columns
   // const dcc = document.querySelector('.card-columns');
    const cc = 'card-columns';

    //keeping switch case in case combination cases need to be 
    //supported in future renditions 
    switch(state.option){
      case 'top-left':
        this.card_control = cc;
      break;
      case 'top-right':
        this.card_control = cc +  ' top-right';
      break;
      case 'bottom-left':
        this.card_control = cc +  ' bottom-left';
      break;
      case 'bottom-right':
        this.card_control = cc +  ' bottom-right';
      break;
      case 'norm-reverse':
        this.card_control = cc +  ' norm-reverse';
      break;
      case 'top-right-reverse':
        this.card_control = cc +  ' top-right-reverse';
      break;
      case 'drape':
        this.card_control = cc +  ' drape';
      break;
      case 'vertical-align':
        this.card_control = cc +  ' vertical-align';
      break;
      case 'vertical-align-even-space':
        this.card_control = cc +  ' vertical-align-even-space';
      break;
    }
  }

}
