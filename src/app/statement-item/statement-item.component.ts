import { Component, OnInit, Input } from '@angular/core';
import { StatementIdService } from '../service/exchange/statement-id.service';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/xml-hint';

@Component({
  selector: 'statement-item',
  templateUrl: './statement-item.component.html',
  styleUrls: ['./statement-item.component.css']
})
export class StatementItemComponent implements OnInit {

  show: number;
  xml: string;
  cmOptions: any = {
    lineNumbers: true,
    styleActiveLine: true,
    lineWrapping: true,
    mode: {name: 'text/xml'},
    theme: 'ambiance',
    extraKeys: {
      'Ctrl': 'autocomplete',
      Tab: function(cm) {
        const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
        cm.replaceSelection(spaces);
      }
    }
  }
  constructor(private statementIdService: StatementIdService
    ) { }

  ngOnInit() {
    this.statementIdService.statementEventer
      .subscribe(xmlValue => {
        this.show = 0;
        console.log("恢复状态")
        this.xml = xmlValue;
      })
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  edit() {
    this.show = 1 - this.show;
  }

  
  refresh() {
    this.statementIdService.emitMapper(this.xml);
  }
}
