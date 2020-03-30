import { Component, OnInit } from '@angular/core';
import { Tab } from './tab.model';
import { StatementIdService } from '../service/exchange/statement-id.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  tabs: Tab[];

  address: string;

  name: string;

  baseUrls: string[];

  activeIp: number;

  constructor(private statementIdService: StatementIdService) { }

  ngOnInit() {
    this.tabs = Array.of();
    this.baseUrls = Array.of();
  }

  addTab() {
    this.onTabAdd(this.address, this.name);
  }

  onTabAdd(addressValue: string, name: string) {
    if (addressValue.endsWith("/")) {
      addressValue = addressValue.substr(0, addressValue.length - 1);
    }
    let tab = Object.assign(new Tab(), {
      id: Math.floor(Math.random() * 99) + 1,
      address: addressValue,
      name: name
    });
    this.tabs.push(tab);
    this.baseUrls.push(addressValue);
    this.activeIp = this.baseUrls.length - 1;
    console.log(this.tabs.length);
    console.log(this.tabs[0].address + this.tabs[0].name);
  }

  //切换tab
  activeTab(i: number) {
    console.log("active tab index = " + i);
    this.activeIp = i;
    this.statementIdService.changeBaseUrl(this.baseUrls[this.activeIp]);
  }

  closeTab(tab: Tab) {
    console.log("关闭标签" + tab.address)
    let index = this.tabs.indexOf(tab);
    if (index < 0) { }
    else {
      this.tabs.splice(index, 1);
      this.baseUrls.splice(index, 1);
    }
  }
}
