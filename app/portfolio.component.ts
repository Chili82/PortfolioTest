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
               <tr *ngFor="let item of items; let i=index" (click)="setClickedRow(i,item)" [class.active]="i == selectedRow" data-toggle="modal" data-target="#myModal">
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
            <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">{{security}}</h4>
      </div>
      <div class="modal-body" >
<div class="classModalRow">
      <div class="classModalLabel">
      <label>Instrument ID</label>
      </div>
      <div class="classModalInput">
        <input type="text" class="form-control" id="security" required [ngModel]="security" name="security">
        </div>
</div>
<div class="classModalRow">
        <div class="classModalLabel">
        <label>ISIN</label>
        </div>
        <div class="classModalInput">
        <div style="width:80%;float:left">
        <input type="text" class="form-control" id="isin" required [ngModel]="isin" name="isin"></div>
        <div style="width:15%;float:left;padding-left:10px">
        <button type="button" id="myButton" data-loading-text="Loading..." class="btn btn-info" autocomplete="off">L</button>
        </div>
        </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`
})

export class PortfolioComponent {

    selectedRow:Number;
    items : Portfolio[];

    inputName : string = '';
    y : number;

    secyrity:string;
    isin:any;
    constructor( ){
        
        this.items = productList;
       
   };
   setClickedRow = function(index:any,red:Portfolio){
            this.selectedRow = index;

            this.isin = red.ISIN;
            this.security = red.security;
            
        }

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