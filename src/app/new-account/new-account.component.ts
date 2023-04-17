import { Component, EventEmitter, Output } from '@angular/core';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    // This is WRONG - there is a better way to get access to the services - Injection!!
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);

    console.log('A server status changed, new status: ' + accountStatus);
  }
}
