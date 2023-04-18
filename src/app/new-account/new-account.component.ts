import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);

    // This is WRONG - there is a better way to get access to the services - Injection!!
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);

    //Old Logging method
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
