import { Component, OnInit } from '@angular/core';
import { Tab } from './tab.model';

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

  constructor() { }

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
}
