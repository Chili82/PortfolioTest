import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';
import { GrafikonComponent } from './grafikon.component';

const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'grafikon', component: GrafikonComponent }
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes),FormsModule ],
    declarations: [AppComponent, PortfolioComponent, GrafikonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
