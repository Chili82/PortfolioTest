import { Component } from '@angular/core';
import {Portfolio} from './portfolio';
import {productList} from './portfolio.service';


@Component({
    selector: 'my-portfolio',
    template: `

    <div class="panel panel-default">
    <!-- Default panel contents -->
    <div class='panel-heading'>Portfolio List</div>
    <div class='panel-body'>
        <table class="table table-bordered table-condensed ">
            <thead>
               <th>Security</th>
               <th>ISIN</th>
               <th>Position</th>
               <th>Close price</th>
               <th>Live price</th>
               <th>Value</th>
               <th>PnL</th>
            </thead>
            <tbody>
               <tr *ngFor="let item of items">
                  <td>{{item.security}}</td>
                  <td>{{item.ISIN}}</td>
                  <td>{{item.position}}</td>
                  <td>{{item.closePrice}}</td>
                  <td>{{item.livePrice}}</td>
                  <td>{{item.value}}</td>
                  <td>{{item.pnl}}</td>
               </tr>
            </tbody>
         </table>
         </div>
         </div>
  
`
})

export class PortfolioComponent {

filteredItems : Portfolio[];
items : Portfolio[];

constructor( ){
         this.filteredItems = productList;
         this.items = productList;
       
   };
}