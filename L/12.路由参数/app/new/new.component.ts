import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  news = [
    { id:1, name:'1', desc: 'new1xxxxxxxxxxx'},
    { id:2, name:'2', desc: 'new2xxxxxxxxxxx'},
    { id:3, name:'3', desc: 'new3xxxxxxxxxxx'},
    { id:4, name:'4', desc: 'new4xxxxxxxxxxx'},
    { id:5, name:'5', desc: 'new5xxxxxxxxxxx'}
  ]

  curNew

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      // console.log('参数是', param)
      const id = param.get('id')
      console.log('参数是', id)
      this.curNew = this.news.find(newone => newone.id === +id)
    })
  }
  }

}
