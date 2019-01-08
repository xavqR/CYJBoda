import {  EventEmitter} from '@angular/core';

export interface CountDownServiceInterface {
    countDownChange: EventEmitter<string>;
    start(eventDate: Date): void;
}
