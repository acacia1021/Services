import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  // //Alternative Method for injecting service
  // private loggingService?: LoggingService

  constructor(private loggingService: LoggingService) {
  }

  // //Alternative Method for injecting service
  // constructor() {
  //   this.loggingService = inject(LoggingService)
  // }

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    // console.log('A server status changed, new status: ' + status);
    this.loggingService.logStatusChange(status);
  }
}
