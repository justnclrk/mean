import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TitleizePipe } from './titleize.pipe';
import { SearchPipe } from './search.pipe';

import * as fromBooks from './books';
import * as fromServices from './services';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleizePipe,
    SearchPipe,
    ...fromBooks.components,
    NavComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule, // <-- Include module in our AppModules
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
