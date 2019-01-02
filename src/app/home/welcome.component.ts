import { Component } from '@angular/core';
import { Observable, Subscription , interval} from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent {

  xaloc = require('src/assets/xaloc.png');
  time = require('src/assets/time.png');

  date = new Date('2019-06-15');
  count = this.date.getTime() / 1000;
  private future: Date;
  futureString = '2019-06-15T18:00:00+01:00';
  private counter$: Observable<number>;
  private subscription: Subscription;
  message: string;

   constructor()
   {
      this.future = new Date(this.futureString);
        this.counter$ = interval(1000).pipe(map((x) => {
           return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
        }));

        this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));
  }

  dhms(t) {
    let days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return [
        days + 'd',
        hours + 'h',
        minutes + 'm',
        ('0' + seconds).slice(-2) + 's'
    ].join(' ');
  }

}
