import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  time = 5;

  ngOnInit() {
    const timeId = setInterval(() => {
      this.time--
      console.log(this.time)
      if( this.time === 0) {
        clearInterval(timeId)
        this.router.navigate(['/home'])
      }
    },1000)
  }


}
