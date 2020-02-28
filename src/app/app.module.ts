import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { StatementItemComponent } from './statement-item/statement-item.component';
import { StatementListComponent } from './statement-list/statement-list.component';
import { RebatisTabComponent } from './rebatis-tab/rebatis-tab.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { StatementService } from './service/statement/statement.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    StatementItemComponent,
    StatementListComponent,
    RebatisTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'service/statement',
      useClass: StatementService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
