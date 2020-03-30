import { Component, OnInit, Input, Output } from '@angular/core';
import { StatementService } from '../service/statement/statement.service';
import { StatementIdService } from '../service/exchange/statement-id.service';
import { StatementModel } from '../model/statement.model';

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

  constructor(
    private statementService: StatementService,
    private statementIdService: StatementIdService
    ) { }

  ngOnInit() {
    
      this.statementIdService.statementIdEventer
        .subscribe(xmlValue => {
          let statement = Object.assign(new StatementModel(), {
            id: this.activeStatementId,
            updateType: 0,
            xml: xmlValue
          })
          this.statementService.refreshStatement(this.url, statement)
            .then(result => {
              console.log("更新完成");
            })
        });

  this.statementIdService.baseUrlEventer
      .subscribe(urlValue => {
        this.url = urlValue;
        this.statementIds = Array.of();
        this.resetStatement();
      })
  }

  resetStatement() {
    this.statementService.getAllStatements(this.url, "")
    .then(statementIdResults => {
      this.statementIds = statementIdResults;
    });
  
  }

  ngAfterContentInit() {
    console.log("statement url = " + this.url);
  }

  search() {
    console.log("this.statementIdForSearch: " + this.statementIdForSearch);
    this.statementService.getAllStatements(this.url, this.statementIdForSearch)
      .then(statementIdResults => {
        console.log("url " + this.url + " has " + statementIdResults.length + " statements" );
        this.statementIds = statementIdResults;
      });
  }

  activeStatement(statementId: string) {
    console.log(statementId);
    this.statementService.getStatement(this.url, statementId)
      .then(statement => {
        this.statementIdService.emitXml(statement.xml);
        this.activeStatementId = statement.id;
      })
  }


  refreshStatement(statementXml: string) {
    console.log("更新mapper");
    let statement: StatementModel = Object.assign(new StatementModel(), {
      id: this.activeStatementId,
      updateType: 0,
      xml: statementXml
    });
    this.statementService.refreshStatement(this.url,statement)
    .then((result: number) => {
      console.log("更新完成")
    });
  }


} 
