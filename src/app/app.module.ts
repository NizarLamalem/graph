import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service, D3_DIRECTIVES } from './d3';

import { AppComponent } from './app.component';
import { GraphComponent } from './visuals/graph/graph-component/graph-component.component';
import { LinkVisualComponentComponent } from './visuals/shared/link-visual-component/link-visual-component.component';
import { NodeVisualComponentComponent } from './visuals/shared/node-visual-component/node-visual-component.component';
import { SHARED_VISUALS } from './visuals/shared';
@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    LinkVisualComponentComponent,
    NodeVisualComponentComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
