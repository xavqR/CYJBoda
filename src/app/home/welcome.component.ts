import { Component, OnInit } from '@angular/core';
import { CountDownService } from '../services/count-down.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  private readonly countDownService: CountDownService;

  public countDownMessage: string;
  public xaloc = require('src/assets/xaloc.png');

  constructor(countDownService: CountDownService) {
    this.countDownService = countDownService;
  }

  ngOnInit(): void {
    this.countDownService.start(new Date('2019-06-15T18:00:00+01:00'));
    this.countDownService.countDownChange.subscribe(cdMessage => this.countDownMessage = cdMessage);
  }

}
