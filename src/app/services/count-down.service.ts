import { Injectable, EventEmitter} from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountDownServiceInterface } from './count-down-service-interface';

@Injectable({
  providedIn: 'root'
})

export class CountDownService implements CountDownServiceInterface {
  public countDownChange: EventEmitter<string>;

  constructor() {
    this.countDownChange =  new EventEmitter();
  }

  public start(eventDate: Date): void {
    let onSecondCountDown$: Observable<number>;

    onSecondCountDown$ = interval(1000).pipe(map((x) => {
       return Math.floor((eventDate.getTime() - new Date().getTime()) / 1000);
    }));

    onSecondCountDown$.subscribe((ms) => this.countDownChange.emit(this.getCountDownMessage(ms)));

  }

  private getCountDownMessage(ms): string  {
    let days: number;
    let hours: number;
    let minutes: number;
    let seconds: number;

    days = Math.floor(ms / 86400);
    ms -= days * 86400;

    hours = Math.floor(ms / 3600) % 24;
    ms -= hours * 3600;

    minutes = Math.floor(ms / 60) % 60;
    ms -= minutes * 60;

    seconds = ms % 60;

    return [days + 'd', hours + 'h', minutes + 'm', ('0' + seconds).slice(-2) + 's'].join(' ');
  }
}
