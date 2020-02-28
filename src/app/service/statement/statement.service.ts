import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StatementModel } from 'src/app/model/statement.model';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  httpHeaders: HttpHeaders = new HttpHeaders(
    {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Max-Age': '60'
    }
  );

  constructor(private http: HttpClient) { }

  getAllStatements(url: string, statementId: string): Promise<string[]> {
    url = url + "/rebatis/statements";
    if (statementId != undefined && statementId != '') {
      url = url + "?statementId=" + statementId;
    }
    return this.http.get(url, {
      headers: this.httpHeaders
    })
      .toPromise()
      .then((result: StatementModel[]) => {
        return result.map(data => {
          return data.id
        });
      }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}

