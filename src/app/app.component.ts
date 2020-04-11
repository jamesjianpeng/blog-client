import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog';
  public routerList = [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'articleTimeLine',
      path: '/article/time-line'
    },
    {
      name: 'article',
      path: '/article'
    }
  ]

  url: string = ''
  constructor(
    private router: Router,
    private location: Location
  ){}

  ngOnInit() {
    console.log('ngOnInit')
    this.url = this.location.path() || '/'
    console.log()
  }

  onNavigate(path: string) {
    this.url = path
    this.router.navigate([path])
  }
}
