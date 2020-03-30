import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatementIdService {

  statementEventer: EventEmitter<string> = new EventEmitter();

  /**
   * 更新mapper文件
   */
  statementIdEventer: EventEmitter<string> = new EventEmitter();

  baseUrlEventer: EventEmitter<string> = new EventEmitter();
  constructor() { }

  emitXml(value: string) {
    this.statementEventer.emit(value);
  }

  emitMapper(value: string) {
    this.statementIdEventer.emit(value);
  }

  changeBaseUrl(value: string) {
    this.baseUrlEventer.emit(value);
  }
}
