import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    timer: number;
    validInput: boolean = true;
    alert: string = null;

    logs:any[] = null;

    constructor(
        private loggingService: LoggingService
    ) { }

    ngOnInit() {
    }

    validateTimer() {
        this.validInput = (this.timer > 120);
        return this.validInput;
    }

    start() {
        if (this.validateTimer()) {
            this.logs = null;
            this.alert = null;

            this.loggingService.clear$().subscribe(() => console.log('Log cleared...'));

            let myTimer = setInterval(() => {
                this.timer--;
                if (this.timer % 10 === 0) {
                    const text = `The timer is ${this.timer}`;
                    this.alert = text;
                    this.loggingService.log$(text)
                        .subscribe(() => { console.log(`Logged: ${text}`); });
                }

                if (this.timer <= 0) {
                    clearInterval(myTimer);
                    this.loggingService.get$()
                        .subscribe((data:any[]) => {
                            this.logs = data;
                        });
                }
            },
                250);
        }
    }

}
