import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'artQuiz';
  isMainScreen = true;
  constructor(public router: Router) {
    router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        // Do something
        this.isMainScreen =
          e.url === '/' || e.url === '/settings' ? true : false;
      });
  }

  ngOnInit() {}
}
