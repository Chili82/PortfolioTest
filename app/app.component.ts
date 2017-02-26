import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
                <header><h1>Helloo {{name}}</h1>
                      <div id="menu" style="clear:both:width:100%;text-align:left;background:url('images/menu.png') 3px 1px no-repeat"> 
                      <label for="showblock"><span>&#9776; Menu</span></label>
                      </div>  
                </header>
                      
                        
                  
                    <input type="checkbox" id="showblock" /> 
    
                    <nav>
                        
                        <a  routerLink="/portfolio" routerLinkActive="active">Portfolio</a>
                        <a  routerLink="/grafikon" routerLinkActive="active">Grafikon</a>
                    </nav>
                <main id="content">
                <router-outlet></router-outlet>
                </main>
            </div>
`
})
export class AppComponent  { name = 'Angular'; }
