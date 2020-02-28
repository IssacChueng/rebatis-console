import { Component, OnInit, Input, Output } from '@angular/core';
import { StatementService } from '../service/statement/statement.service';

@Component({
  selector: 'statement-list',
  templateUrl: './statement-list.component.html',
  styleUrls: ['./statement-list.component.css']
})
export class StatementListComponent implements OnInit {

  @Input()
  url: string;

  statementIds: string[];

  statementIdForSearch: string;

  @Output()
  activeStatementId: string;

  constructor(private statementService: StatementService) { }

  ngOnInit() {

  }


  ngAfterContentInit() {
    console.log("statement url = " + this.url);
  }

  search(value: string) {
    console.log("this.statementIdForSearch: " + this.statementIdForSearch);
    this.statementService.getAllStatements(this.url, value)
      .then(statementIdResults => {
        console.log("url " + value + " has " + statementIdResults.length + " statements" );
        this.statementIds = statementIdResults;
      })
  }
} 
