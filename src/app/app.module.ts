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
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js'
import 'highlight.js/styles/github.css';
import * as  hljs from 'highlight.js/lib/highlight';
import * as xmlhljs from 'highlight.js/lib/languages/xml';
import { CodemirrorModule } from 'ng2-codemirror';

export function highlightJsFactory(): any {
  // only register the typescript language
  hljs.registerLanguage('xml', xmlhljs);
  return hljs;
}

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
    HttpClientModule,
    HighlightJsModule,
    CodemirrorModule
  ],
  providers: [
    {
      provide: 'service/statement',
      useClass: StatementService
    },
    {
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
