import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  //Not needed because of accountService
  // @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  // //Alternative Method for injecting service
  // private loggingService?: LoggingService

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  }

  // //Alternative Method for injecting service
  // constructor() {
  //   this.loggingService = inject(LoggingService)
  // }

  onSetTo(status: string) {
    //Not needed because of accountService
    // this.statusChanged.emit({ id: this.id, newStatus: status });

    // console.log('A server status changed, new status: ' + status);

    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
