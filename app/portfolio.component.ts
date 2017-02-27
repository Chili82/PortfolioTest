import { Component } from '@angular/core';
import {Portfolio} from './portfolio';
import {productList} from './portfolio.service';


@Component({
    selector: 'my-portfolio',
    template: `
<div class="form-group">
         <label><span class="glyphicon glyphicon-search" aria-hidden="true"></span></label>
         <input placeholder="Search Security"  type="text" (keyup)="FilterBySecurity()"  id="inputName" [(ngModel)]="inputName"/>

   </div>
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
                  <td>{{computeValue(item.position,item.livePrice)}}</td>
                  <td>{{computePnl(item.position,item.livePrice,item.closePrice)}}</td>
               </tr>
            </tbody>
         </table>
         </div>
         </div>
  
`
})

export class PortfolioComponent {


items : Portfolio[];
inputName : string = '';
y : number;
constructor( ){
        
         this.items = productList;
       
   };
computeValue(x:any, y:any){
    
    var z = x*y;
    return z.toFixed(3);
}

computePnl(x:any, y:any, z:any){
    
    var t = x*(y-z);
    return t.toFixed(3);
}
    FilterBySecurity(){
      this.items = [];

      if(this.inputName != ""){
            productList.forEach(element => {
                if(element.security.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
                  this.items.push(element);
               }
            });
      }else{
         this.items = productList;
      }
    
   }
}